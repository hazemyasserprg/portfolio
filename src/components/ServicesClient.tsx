"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Code, Cuboid, MonitorSmartphone } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { SpotlightCard } from "@/components/SpotlightCard";

const services = [
    {
        title: "Full-Stack Web Development",
        description: "End-to-end custom web applications built with modern frameworks like Next.js and React. Emphasizing high performance, scalable architectures, and beautiful user interfaces connected to robust backend systems.",
        icon: <Code size={32} className="text-primary" />,
        features: ["React & Next.js", "Node & Express Backends", "Database Architecture", "REST & GraphQL APIs", "Performance Optimization"]
    },
    {
        title: "Immersive 3D Web Experiences",
        description: "Engage your audience with interactive, GPU-accelerated 3D graphics rendered directly in the browser. Perfect for product showcases, interactive portfolios, and creative marketing campaigns.",
        icon: <Cuboid size={32} className="text-accent" />,
        features: ["Three.js & WebGL", "React Three Fiber", "Custom Shaders (GLSL)", "3D Model Optimization", "Interactive Physics"]
    },
    {
        title: "Framer Web Design",
        description: "Stunning, high-converting marketing sites designed and developed quickly using Framer. Combining beautiful animations, responsive layouts, and CMS integrations for a premium brand feel.",
        icon: <MonitorSmartphone size={32} className="text-purple-500" />,
        features: ["Framer Animations", "Responsive Breakpoints", "Fast Iteration", "SEO Friendly", "CMS Setup"]
    }
];

export default function ServicesClient() {
    return (
        <main className="relative min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 lg:px-24 overflow-hidden">
            <GalaxyBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 group w-fit"
                >
                    <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Home
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-20"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
                        Services<span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        I specialize in creating premium digital experiences across multiple disciplines, from robust web applications to stunning 3D visual environments.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="h-full"
                        >
                            <SpotlightCard className="p-8 md:p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                                    <p className="text-neutral-400 leading-relaxed mb-8">
                                        {service.description}
                                    </p>
                                </div>
                                <ul className="space-y-3 mt-auto">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-neutral-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 p-8 md:p-12 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl font-bold mb-4">Ready to start a project?</h2>
                    <p className="text-neutral-400 mb-8 max-w-lg">
                        Let&apos;s discuss your ideas and figure out how we can bring them to life using modern web technologies.
                    </p>
                    <Link
                        href="/contact"
                        className="premium-button px-8 py-4 text-lg w-full sm:w-auto inline-flex items-center justify-center"
                    >
                        Get in Touch
                    </Link>
                </motion.div>
            </div>
        </main>
    );
}
