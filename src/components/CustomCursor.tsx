"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHoveringProject, setIsHoveringProject] = useState(false);
    const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
    }, []);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { damping: 25, stiffness: 250 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    const lastHoverCheck = useRef(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            if (!isVisible) setIsVisible(true);

            // Throttle hover checks to avoid excessive DOM traversal
            const now = Date.now();
            if (now - lastHoverCheck.current > 50) {
                lastHoverCheck.current = now;
                const target = e.target as HTMLElement;
                const isProject = !!target.closest('[data-project-card="true"]');
                const isInteractive = !!target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');

                setIsHoveringProject(isProject);
                setIsHoveringInteractive(isInteractive && !isProject);
            }
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    const velocityX = useMotionValue(0);

    // Calculate velocity for stretch effect
    useEffect(() => {
        let lastX = 0;
        let timestamp = 0;

        const unsubscribeX = cursorX.onChange((x) => {
            const now = Date.now();
            if (timestamp) {
                const delta = now - timestamp;
                if (delta > 0) {
                    velocityX.set((x - lastX) / delta);
                }
            }
            lastX = x;
            timestamp = now;
        });
        return () => unsubscribeX();
    }, [cursorX, velocityX]);

    const scaleX = useSpring(useMotionValue(1), { stiffness: 400, damping: 30 });
    const scaleY = useSpring(useMotionValue(1), { stiffness: 400, damping: 30 });

    // Listen to mouse movement to calculate "stretch" based on velocity
    useEffect(() => {
        const updateVelocity = () => {
            const vx = cursorX.getVelocity();
            const vy = cursorY.getVelocity();
            const speed = Math.sqrt(vx * vx + vy * vy);

            // Stretch based on speed (max stretch 1.5x at high speed)
            const targetScaleX = 1 + Math.min(speed * 0.0005, 0.5);
            const targetScaleY = 1 - Math.min(speed * 0.0002, 0.2); // Slight squash

            scaleX.set(targetScaleX);
            scaleY.set(targetScaleY);
        }

        const interval = setInterval(updateVelocity, 16);
        return () => clearInterval(interval);
    }, [cursorX, cursorY, scaleX, scaleY]);

    if (isTouchDevice) return null;
    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/50 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                scaleX: scaleX,
                scaleY: scaleY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHoveringInteractive ? 1.8 : (isHoveringProject ? 4 : 1),
                opacity: 1, // Always visible
                backgroundColor: isHoveringProject ? "rgba(99, 102, 241, 0.9)" : (isHoveringInteractive ? "rgba(255, 255, 255, 0.8)" : "rgba(99, 102, 241, 0.5)"),
                mixBlendMode: isHoveringInteractive ? "difference" : "normal"
            }}
        >
            {isHoveringProject && (
                <motion.span
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-[10px] font-bold text-white tracking-widest uppercase"
                >
                    View
                </motion.span>
            )}
        </motion.div>
    );
}
