"use client";

import { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
    Float,
    MeshTransmissionMaterial,
    Sphere,
    PerspectiveCamera,
    Text,
    Environment,
    ContactShadows,
    Torus
} from "@react-three/drei";
import * as THREE from "three";

function Particles({ count = 40 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            p[i * 3] = (Math.random() - 0.5) * 6;
            p[i * 3 + 1] = (Math.random() - 0.5) * 6;
            p[i * 3 + 2] = (Math.random() - 0.5) * 6;
        }
        return p;
    }, [count]);

    const ref = useRef<THREE.Points>(null);
    useFrame((state) => {
        if (ref.current) {
            ref.current.rotation.y += 0.001;
            ref.current.rotation.z += 0.001;
        }
    });

    return (
        <points ref={ref}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    args={[points, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#6366f1" transparent opacity={0.6} />
        </points>
    );
}

function Rig() {
    return useFrame((state) => {
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, state.mouse.x * 0.5, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, state.mouse.y * 0.5, 0.05);
        state.camera.lookAt(0, 0, 0);
    });
}

function Scene() {
    const meshRef = useRef<THREE.Mesh>(null);
    const ring1Ref = useRef<THREE.Mesh>(null);
    const ring2Ref = useRef<THREE.Mesh>(null);
    const [hovered, setHovered] = useState(false);

    const colorA = useMemo(() => new THREE.Color("#6366f1"), []);
    const colorB = useMemo(() => new THREE.Color("#4f46e5"), []);
    const tempColor = useMemo(() => new THREE.Color(), []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const { x, y } = state.mouse;

        // Entrance animation (0 to 1 scale over 2 seconds)
        const entranceScale = Math.min(time / 2, 1);
        const easedEntrance = 1 - Math.pow(1 - entranceScale, 3); // Cubic ease out

        if (meshRef.current) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, time * 0.1 + y * 0.2, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, time * 0.15 + x * 0.2, 0.1);

            // Smoothly lerp scale
            const targetScale = (hovered ? 1.1 : 1) * easedEntrance;
            const currentScale = meshRef.current.scale.x;
            const newScale = THREE.MathUtils.lerp(currentScale, targetScale, 0.1);
            meshRef.current.scale.setScalar(newScale);

            // Smoothly lerp color
            const targetColor = hovered ? colorB : colorA;
            if (meshRef.current.material) {
                (meshRef.current.material as any).color.lerp(targetColor, 0.1);
            }
        }
        if (ring1Ref.current) {
            ring1Ref.current.rotation.z = time * 0.4;
            ring1Ref.current.rotation.x = THREE.MathUtils.lerp(ring1Ref.current.rotation.x, time * 0.2 + y * 0.5, 0.1);
            ring1Ref.current.scale.setScalar(easedEntrance);
        }
        if (ring2Ref.current) {
            ring2Ref.current.rotation.z = -time * 0.3;
            ring2Ref.current.rotation.y = THREE.MathUtils.lerp(ring2Ref.current.rotation.y, time * 0.2 + x * 0.5, 0.1);
            ring2Ref.current.scale.setScalar(easedEntrance);
        }
    });

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <Environment preset="city" />
            <ambientLight intensity={0.2} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} color="#6366f1" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#10b981" />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* The Glass Core */}
                <Sphere
                    ref={meshRef}
                    args={[1.2, 48, 48]} // Slightly lower segments
                    onPointerOver={() => setHovered(true)}
                    onPointerOut={() => setHovered(false)}
                >
                    <MeshTransmissionMaterial
                        samples={6} // Lower samples for performance
                        resolution={512} // Cap internal resolution
                        thickness={1}
                        chromaticAberration={0.05}
                        anisotropy={0.1}
                        distortion={0.5}
                        distortionScale={0.5}
                        temporalDistortion={0.2}
                        color={colorA} // Initial color
                        roughness={0.1}
                        transmission={1}
                    />
                </Sphere>

                {/* Orbiting Glass Rings */}
                <Torus ref={ring1Ref} args={[2.2, 0.015, 12, 64]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#6366f1" emissive="#6366f1" emissiveIntensity={2} transparent opacity={0.5} />
                </Torus>

                <Torus ref={ring2Ref} args={[2.5, 0.01, 12, 64]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
                    <meshStandardMaterial color="#10b981" emissive="#10b981" emissiveIntensity={2} transparent opacity={0.3} />
                </Torus>
            </Float>

            <Particles count={40} />
            <Rig />

            <ContactShadows
                position={[0, -3, 0]}
                opacity={0.4}
                scale={15}
                blur={2.5}
                far={4.5}
                resolution={256} // Lower shadow resolution
            />
        </>
    );
}

export default function HeroScene() {
    return (
        <div className="w-full h-full cursor-none">
            <Canvas dpr={[1, 1.5]}>
                <Scene />
            </Canvas>
        </div>
    );
}
