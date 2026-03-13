// Only run if the container exists (Homepage)
const container = document.getElementById('three-container');

if (container && typeof THREE !== 'undefined') {
    // Scene Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Create the "Collar" (Torus)
    const geometry = new THREE.TorusGeometry(2, 0.6, 32, 64);
    const material = new THREE.MeshPhysicalMaterial({ 
        color: 0xFF9EC8, // Hot Pink
        metalness: 0.1,
        roughness: 0.2,
        clearcoat: 1.0,
        clearcoatRoughness: 0.1
    });
    const collar = new THREE.Mesh(geometry, material);
    
    // Create a little "Tag" (Cylinder) attached to the collar
    const tagGeo = new THREE.CylinderGeometry(0.8, 0.8, 0.2, 32);
    const tagMat = new THREE.MeshPhysicalMaterial({ color: 0xFFE66D, metalness: 0.5, roughness: 0.2 }); // Sunny Yellow
    const tag = new THREE.Mesh(tagGeo, tagMat);
    tag.position.set(0, -2.5, 0);
    tag.rotation.x = Math.PI / 2;
    
    // Group them
    const petGear = new THREE.Group();
    petGear.add(collar);
    petGear.add(tag);
    scene.add(petGear);

    // Floating Sparkles (Particles)
    const particles = new THREE.Group();
    const sphereGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const colors = [0xA2E8FF, 0xB5EAD7, 0xFFE66D]; // Blue, Mint, Yellow
    
    for(let i=0; i<15; i++) {
        const pMat = new THREE.MeshBasicMaterial({ color: colors[Math.floor(Math.random() * colors.length)] });
        const p = new THREE.Mesh(sphereGeo, pMat);
        p.position.set(
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10,
            (Math.random() - 0.5) * 10
        );
        p.userData = {
            yOff: Math.random() * Math.PI * 2,
            speed: 0.01 + Math.random() * 0.02
        };
        particles.add(p);
    }
    scene.add(particles);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pinkLight = new THREE.PointLight(0xFF9EC8, 2, 10);
    pinkLight.position.set(-3, 0, 2);
    scene.add(pinkLight);

    camera.position.z = 8;

    // Animation Loop
    let time = 0;
    function animate() {
        requestAnimationFrame(animate);
        time += 0.01;

        // Rotate primary object
        petGear.rotation.x = Math.sin(time) * 0.2;
        petGear.rotation.y += 0.005;

        // Float particles
        particles.children.forEach(p => {
            p.position.y += Math.sin(time * 2 + p.userData.yOff) * 0.01;
            p.rotation.x += p.userData.speed;
            p.rotation.y += p.userData.speed;
        });

        // Gently bob the whole gear
        petGear.position.y = Math.sin(time * 2) * 0.2;

        renderer.render(scene, camera);
    }
    animate();

    // Handle Resize
    window.addEventListener('resize', () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });
}
