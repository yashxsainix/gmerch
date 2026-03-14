(function () {
  const mount = document.getElementById('hero-3d');
  const shell = mount ? mount.closest('.hero-canvas') : null;
  if (!mount || !window.THREE || !shell) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches || Boolean(navigator.connection && navigator.connection.saveData);
  const mobileLike = window.innerWidth < 768 || window.matchMedia('(hover: none), (pointer: coarse)').matches;

  if (reduceMotion || mobileLike || !window.WebGLRenderingContext) {
    shell.classList.add('fallback-mode');
    return;
  }

  const start = () => {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
      camera.position.set(0, 0.3, 6.2);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      renderer.outputEncoding = THREE.sRGBEncoding;
      mount.appendChild(renderer.domElement);

      const ambient = new THREE.AmbientLight(0xffffff, 1.35);
      scene.add(ambient);

      const pinkLight = new THREE.PointLight(0xff9ec8, 1.6, 40);
      pinkLight.position.set(4, 4, 4);
      scene.add(pinkLight);

      const blueLight = new THREE.PointLight(0xa2e8ff, 1.35, 40);
      blueLight.position.set(-4, -1, 4);
      scene.add(blueLight);

      const yellowLight = new THREE.PointLight(0xffe66d, 1, 20);
      yellowLight.position.set(0, 4, 2);
      scene.add(yellowLight);

      const heroGroup = new THREE.Group();
      scene.add(heroGroup);

      const collarMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xff9ec8,
        roughness: 0.22,
        metalness: 0.08,
        clearcoat: 0.5,
        clearcoatRoughness: 0.2
      });

      const collar = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.32, 22, 88), collarMaterial);
      collar.rotation.x = Math.PI / 2.9;
      heroGroup.add(collar);

      const bandanaMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xa2e8ff,
        roughness: 0.48,
        metalness: 0.03,
        side: THREE.DoubleSide
      });
      const bandana = new THREE.Mesh(new THREE.ConeGeometry(1.05, 1.28, 3), bandanaMaterial);
      bandana.position.set(0, -1.18, 0.18);
      bandana.rotation.z = Math.PI;
      bandana.rotation.x = 0.28;
      heroGroup.add(bandana);

      const tag = new THREE.Mesh(
        new THREE.CircleGeometry(0.26, 28),
        new THREE.MeshPhysicalMaterial({ color: 0xffe66d, roughness: 0.25, metalness: 0.14 })
      );
      tag.position.set(0.95, -0.28, 0.24);
      heroGroup.add(tag);

      const sparkleGeometry = new THREE.SphereGeometry(0.045, 10, 10);
      const sparkles = [];
      for (let i = 0; i < 20; i += 1) {
        const sparkle = new THREE.Mesh(
          sparkleGeometry,
          new THREE.MeshBasicMaterial({ color: i % 2 === 0 ? 0xffffff : 0xfff5c1 })
        );
        const radius = 2 + Math.random() * 1.3;
        const angle = (i / 20) * Math.PI * 2;
        sparkle.position.set(Math.cos(angle) * radius, (Math.random() - 0.5) * 2.6, Math.sin(angle) * radius * 0.6);
        sparkle.userData = { radius, speed: 0.004 + Math.random() * 0.01, angle, yOffset: (Math.random() - 0.5) * 2.2 };
        scene.add(sparkle);
        sparkles.push(sparkle);
      }

      let rafId = 0;
      const clock = new THREE.Clock();
      const animate = () => {
        rafId = requestAnimationFrame(animate);
        const elapsed = clock.getElapsedTime();

        heroGroup.rotation.y += 0.008;
        heroGroup.rotation.x = Math.sin(elapsed * 0.9) * 0.08;
        heroGroup.position.y = Math.sin(elapsed * 1.2) * 0.1;

        sparkles.forEach((sparkle, index) => {
          sparkle.userData.angle += sparkle.userData.speed;
          sparkle.position.x = Math.cos(sparkle.userData.angle) * sparkle.userData.radius;
          sparkle.position.z = Math.sin(sparkle.userData.angle) * sparkle.userData.radius * 0.6;
          sparkle.position.y = sparkle.userData.yOffset + Math.sin(elapsed * 1.6 + index) * 0.18;
        });

        renderer.render(scene, camera);
      };

      const onResize = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
      };

      window.addEventListener('resize', onResize);
      shell.classList.add('is-loaded');
      animate();

      document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
          cancelAnimationFrame(rafId);
        } else if (shell.classList.contains('is-loaded')) {
          animate();
        }
      });
    } catch (error) {
      shell.classList.remove('is-loaded');
      shell.classList.add('fallback-mode');
    }
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(start, { timeout: 500 });
  } else {
    window.setTimeout(start, 120);
  }
})();
