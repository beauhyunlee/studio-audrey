import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SpiralScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    // scene
    const scene = new THREE.Scene();

    // camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 4;

    // renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);

    mountRef.current.appendChild(renderer.domElement);

    // light
    const light = new THREE.PointLight(0xffffff, 2);

    light.position.set(5, 5, 5);

    scene.add(light);

    // spiral
    const points = [];
    const turns = 5;
    const totalPoints = 600;

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints;

      const angle = t * Math.PI * 2 * turns;

      const radius = t * 1.3;

      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      const z = (t - 0.5) * 2;

      points.push(new THREE.Vector3(x, y, z));
    }

    const curve = new THREE.CatmullRomCurve3(points);

    const geometry = new THREE.TubeGeometry(
      curve,
      300,
      0.015,
      8,
      false
    );

    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.25,
      metalness: 0.8,
    });

    const spiral = new THREE.Mesh(geometry, material);

    scene.add(spiral);

    
    // animation
    const animate = () => {
      requestAnimationFrame(animate);

      const scrollY = window.scrollY;

      // scroll rotation
      spiral.rotation.z = scrollY * 0.003;
      spiral.rotation.y = scrollY * 0.002;

      // idle spin
      spiral.rotation.x += 0.004;

      renderer.render(scene, camera);
    };

    animate();

    
    // resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;

      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="fixed inset-0 z-0" />;
}