import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import './DottedSurface.css';

const DottedSurface = ({ className = '', ...props }) => {
	const containerRef = useRef(null);
	const sceneRef = useRef(null);

	useEffect(() => {
		if (!containerRef.current) return;

		const SEPARATION = 150;
		const AMOUNTX = 40;
		const AMOUNTY = 60;

		// Scene setup
		const scene = new THREE.Scene();
		scene.fog = new THREE.Fog(0x000000, 2000, 10000); // Black fog to match background

		const camera = new THREE.PerspectiveCamera(
			60,
			window.innerWidth / window.innerHeight,
			1,
			10000,
		);
		camera.position.set(0, 355, 1220);

		const renderer = new THREE.WebGLRenderer({
			alpha: true,
			antialias: true,
		});
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.setClearColor(0x000000, 0); // Transparent black background

		containerRef.current.appendChild(renderer.domElement);

		// Create geometry for all particles
		const geometry = new THREE.BufferGeometry();
		const positions = [];
		const colors = [];

		for (let ix = 0; ix < AMOUNTX; ix++) {
			for (let iy = 0; iy < AMOUNTY; iy++) {
				const x = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2;
				const y = 0;
				const z = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2;

				positions.push(x, y, z);
				colors.push(200, 200, 200);
			}
		}

		geometry.setAttribute(
			'position',
			new THREE.Float32BufferAttribute(positions, 3),
		);
		geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

		const material = new THREE.PointsMaterial({
			size: 8,
			vertexColors: true,
			transparent: true,
			opacity: 0.8,
			sizeAttenuation: true,
		});

		const points = new THREE.Points(geometry, material);
		scene.add(points);

		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.render(scene, camera);
		};

		window.addEventListener('resize', handleResize);

		// Initial render (no animation)
		renderer.render(scene, camera);

		sceneRef.current = {
			scene,
			camera,
			renderer,
			particles: [points],
			animationId: null,
		};

		return () => {
			window.removeEventListener('resize', handleResize);

			if (sceneRef.current) {
				sceneRef.current.scene.traverse((object) => {
					if (object instanceof THREE.Points) {
						object.geometry.dispose();
						if (Array.isArray(object.material)) {
							object.material.forEach((material) => material.dispose());
						} else {
							object.material.dispose();
						}
					}
				});

				sceneRef.current.renderer.dispose();

				if (containerRef.current && sceneRef.current.renderer.domElement) {
					containerRef.current.removeChild(
						sceneRef.current.renderer.domElement,
					);
				}
			}
		};
	}, []);

	return (
		<div
			ref={containerRef}
			className={`dotted-surface ${className}`}
			{...props}
		/>
	);
};

export default DottedSurface;
