"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Stars() {
    const ref = useRef<THREE.Points>(null);
    const count = 700; // Reduced from 2000

    // Generate positions once
    const positions = useMemo(() => {
        const p = new Float32Array(count * 3);
        const color = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            // Random distribution in a sphere
            const r = 1.2 * Math.cbrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            p[i * 3] = r * Math.sin(phi) * Math.cos(theta);
            p[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
            p[i * 3 + 2] = r * Math.cos(phi);
        }
        return p;
    }, []);

    useFrame((state, delta) => {
        if (!ref.current) return;
        // Verify very slow rotation
        ref.current.rotation.x -= delta / 15;
        ref.current.rotation.y -= delta / 20;

        // Subtle mouse parallax
        const { x, y } = state.mouse;
        ref.current.rotation.x += y * 0.0002;
        ref.current.rotation.y += x * 0.0002;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <points ref={ref}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={count}
                        array={positions}
                        itemSize={3}
                        args={[positions, 3]}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.003}
                    color="#6366f1"
                    sizeAttenuation={true}
                    transparent={true}
                    opacity={0.6}
                    depthWrite={false}
                />
            </points>
        </group>
    );
}

export default function GalaxyBackground() {
    return (
        <div className="fixed inset-0 -z-10 bg-black">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
                <Stars />
            </Canvas>
        </div>
    );
}
