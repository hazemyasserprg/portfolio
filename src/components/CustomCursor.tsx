"use client";

import { useEffect, useState } from "react";
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

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            if (!isVisible) setIsVisible(true);

            // Check if hovering over a project card
            const target = e.target as HTMLElement;
            const isProject = !!target.closest('[data-project-card="true"]');

            // Check for generic interactive elements
            const isInteractive = !!target.closest('a, button, input, textarea, [role="button"], .cursor-pointer');

            setIsHoveringProject(isProject);
            setIsHoveringInteractive(isInteractive && !isProject);
        };

        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [isVisible, mouseX, mouseY]);

    if (isTouchDevice) return null;
    if (!isVisible) return null;

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/50 pointer-events-none z-[9999] flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
                translateX: "-50%",
                translateY: "-50%",
            }}
            animate={{
                scale: isHoveringInteractive ? 0 : (isHoveringProject ? 4 : 1),
                opacity: isHoveringInteractive ? 0 : 1,
                backgroundColor: isHoveringProject ? "rgba(99, 102, 241, 0.9)" : "rgba(99, 102, 241, 0.5)",
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
