import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const StarsBackground = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        let scene, camera, renderer, stars, starGeo, velocities;
        let mouseX = 0, mouseY = 0, targetX = 0, targetY = 0;
        let isHovering = true;
        let settingSize = 25;

        function init() {
            scene = new THREE.Scene();
            let aspect = window.innerWidth / window.innerHeight;
            let frustumSize = 50;

            camera = new THREE.OrthographicCamera(
                -frustumSize * aspect, frustumSize * aspect,
                frustumSize, -frustumSize,
                1, 1000
            );
            camera.position.z = 10;

            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth - settingSize, window.innerHeight);
            mountRef.current.appendChild(renderer.domElement);

            createStars(aspect, frustumSize);

            document.addEventListener("mousemove", (event) => {
                let rect = renderer.domElement.getBoundingClientRect();
                mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
                mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            });

            animate();
        }

        function createStars(aspect, frustumSize) {
            if (stars) {
                scene.remove(stars);
                // console.log("Stars removed from scene");
            }
            starGeo = new THREE.BufferGeometry();
            let vertices = [];
            velocities = [];

            let starCount = 350;
            let boundary = frustumSize * aspect;

            for (let i = 0; i < starCount; i++) {
                let x = (Math.random() - 0.5) * boundary * 2;
                let y = (Math.random() - 0.5) * frustumSize * 2;
                let z = Math.random() * -500;
                vertices.push(x, y, z);
                velocities.push((Math.random() - 0.5) * 0.2, (Math.random() - 0.5) * 0.2);
                // console.log("Vertices: ",x,y,z);
            }

            starGeo.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

            let starTexture = new THREE.TextureLoader().load('https://threejs.org/examples/textures/sprites/circle.png');

            let starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 3.8,
                map: starTexture,
                transparent: true,
                depthWrite: false,
            });

            stars = new THREE.Points(starGeo, starMaterial);
            scene.add(stars);
        }

        function animate() {
            let positions = starGeo.attributes.position.array;
            let boundaryX = camera.right;
            let boundaryY = camera.top;

            for (let i = 0, j = 0; i < positions.length; i += 3, j += 2) {
                positions[i] += velocities[j];
                positions[i + 1] += velocities[j + 1];

                if (positions[i] > boundaryX) positions[i] = -boundaryX;
                if (positions[i] < -boundaryX) positions[i] = boundaryX;
                if (positions[i + 1] > boundaryY) positions[i + 1] = -boundaryY;
                if (positions[i + 1] < -boundaryY) positions[i + 1] = boundaryY;
            }

            starGeo.attributes.position.needsUpdate = true;

            if (isHovering) {
                targetX = mouseX * 0.35;
                targetY = mouseY * 0.25;
            }

            camera.position.x += (targetX - camera.position.x) * 0.05;
            camera.position.y += (targetY - camera.position.y) * 0.05;
            camera.lookAt(scene.position);

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        function handleResize() {
            let aspect = window.innerWidth / window.innerHeight;
            let frustumSize = 50;

            // Update camera projection
            camera.left = -frustumSize * aspect;
            camera.right = frustumSize * aspect;
            camera.top = frustumSize;
            camera.bottom = -frustumSize;
            camera.updateProjectionMatrix();

            // Update renderer size
            renderer.setSize(window.innerWidth - settingSize, window.innerHeight);

            // Recreate stars with new aspect ratio
            createStars(aspect, frustumSize);
        }

        init();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current && renderer.domElement) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return <div ref={mountRef} style={{ position: "absolute", top: 0, left: 0 }} />;
};

export default StarsBackground;