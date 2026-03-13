(function () {
  const mount = document.getElementById('hero-3d');
  if (!mount || !window.THREE) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
  camera.position.set(0, 0.3, 6.4);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(mount.clientWidth, mount.clientHeight);
  renderer.outputEncoding = THREE.sRGBEncoding;
  mount.appendChild(renderer.domElement);

  const ambient = new THREE.AmbientLight(0xffffff, 1.5);
  scene.add(ambient);

  const pinkLight = new THREE.PointLight(0xff9ec8, 1.9, 40);
  pinkLight.position.set(4, 4, 4);
  scene.add(pinkLight);

  const blueLight = new THREE.PointLight(0xa2e8ff, 1.5, 40);
  blueLight.position.set(-4, -1, 4);
  scene.add(blueLight);

  const yellowLight = new THREE.PointLight(0xffe66d, 1.2, 20);
  yellowLight.position.set(0, 4, 2);
  scene.add(yellowLight);

  const heroGroup = new THREE.Group();
  scene.add(heroGroup);

  const collarMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xff9ec8,
    roughness: 0.22,
    metalness: 0.08,
    clearcoat: 0.6,
    clearcoatRoughness: 0.2
  });

  const collar = new THREE.Mesh(new THREE.TorusGeometry(1.4, 0.34, 28, 100), collarMaterial);
  collar.rotation.x = Math.PI / 2.9;
  heroGroup.add(collar);

  const bandanaMaterial = new THREE.MeshPhysicalMaterial({
    color: 0xa2e8ff,
    roughness: 0.5,
    metalness: 0.03,
    side: THREE.DoubleSide
  });
  const bandana = new THREE.Mesh(new THREE.ConeGeometry(1.15, 1.4, 3), bandanaMaterial);
  bandana.position.set(0, -1.25, 0.18);
  bandana.rotation.z = Math.PI;
  bandana.rotation.x = 0.28;
  heroGroup.add(bandana);

  const tag = new THREE.Mesh(
    new THREE.CircleGeometry(0.28, 32),
    new THREE.MeshPhysicalMaterial({ color: 0xffe66d, roughness: 0.25, metalness: 0.14 })
  );
  tag.position.set(0.95, -0.28, 0.24);
  heroGroup.add(tag);

  const mintBow = new THREE.Mesh(
    new THREE.BoxGeometry(0.58, 0.18, 0.16),
    new THREE.MeshPhysicalMaterial({ color: 0xb5ead7, roughness: 0.28 })
  );
  mintBow.position.set(-1.1, 0.2, 0.22);
  mintBow.rotation.z = 0.5;
  heroGroup.add(mintBow);

  const sparkleGeometry = new THREE.SphereGeometry(0.05, 12, 12);
  const sparkleMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
  const sparkles = [];

  for (let i = 0; i < 36; i += 1) {
    const sparkle = new THREE.Mesh(sparkleGeometry, sparkleMaterial.clone());
    const radius = 2.1 + Math.random() * 1.8;
    const angle = (i / 36) * Math.PI * 2;
    sparkle.position.set(
      Math.cos(angle) * radius,
      (Math.random() - 0.5) * 3.2,
      Math.sin(angle) * radius * 0.65
    );
    sparkle.userData = {
      radius,
      speed: 0.004 + Math.random() * 0.012,
      angle,
      yOffset: (Math.random() - 0.5) * 2.8
    };
    scene.add(sparkle);
    sparkles.push(sparkle);
  }

  function createPawTexture(fill) {
    const canvas = document.createElement('canvas');
    canvas.width = 160;
    canvas.height = 160;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = fill;
    ctx.beginPath();
    ctx.arc(52, 42, 18, 0, Math.PI * 2);
    ctx.arc(100, 38, 16, 0, Math.PI * 2);
    ctx.arc(30, 86, 16, 0, Math.PI * 2);
    ctx.arc(118, 84, 16, 0, Math.PI * 2);
    ctx.moveTo(48, 78);
    ctx.bezierCurveTo(22, 88, 22, 120, 50, 128);
    ctx.bezierCurveTo(72, 136, 104, 134, 116, 120);
    ctx.bezierCurveTo(132, 104, 128, 84, 106, 76);
    ctx.bezierCurveTo(92, 70, 66, 70, 48, 78);
    ctx.closePath();
    ctx.fill();
    return new THREE.CanvasTexture(canvas);
  }

  const pawColors = ['#ff9ec8', '#a2e8ff', '#ffe66d', '#b5ead7'];
  const paws = [];
  pawColors.forEach((color, index) => {
    const texture = createPawTexture(color);
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: texture, transparent: true }));
    sprite.scale.set(0.74, 0.74, 0.74);
    sprite.userData = {
      orbitRadius: 2.6 + index * 0.38,
      orbitSpeed: 0.007 + index * 0.002,
      orbitOffset: index * (Math.PI / 2),
      yBase: index % 2 === 0 ? 0.9 : -0.8,
    };
    scene.add(sprite);
    paws.push(sprite);
  });

  let tick = 0;
  const clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const elapsed = clock.getElapsedTime();
    tick += 0.01;

    heroGroup.rotation.y += 0.008;
    heroGroup.rotation.x = Math.sin(elapsed * 0.9) * 0.08;
    heroGroup.position.y = Math.sin(elapsed * 1.2) * 0.12;

    sparkles.forEach((sparkle, index) => {
      sparkle.userData.angle += sparkle.userData.speed;
      sparkle.position.x = Math.cos(sparkle.userData.angle) * sparkle.userData.radius;
      sparkle.position.z = Math.sin(sparkle.userData.angle) * sparkle.userData.radius * 0.65;
      sparkle.position.y = sparkle.userData.yOffset + Math.sin(elapsed * 1.8 + index) * 0.22;
      sparkle.scale.setScalar(0.85 + Math.sin(elapsed * 2.8 + index) * 0.25);
    });

    paws.forEach((paw, index) => {
      const orbit = paw.userData.orbitOffset + tick * (1 + index * 0.12);
      paw.position.set(
        Math.cos(orbit) * paw.userData.orbitRadius,
        paw.userData.yBase + Math.sin(elapsed * 1.3 + index) * 0.22,
        Math.sin(orbit) * paw.userData.orbitRadius * 0.45
      );
    });

    renderer.render(scene, camera);
  }

  function onResize() {
    const width = mount.clientWidth;
    const height = mount.clientHeight;
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  }

  window.addEventListener('resize', onResize);
  animate();
})();
