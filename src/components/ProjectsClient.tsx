"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { projects } from "@/content/projects";
import GalaxyBackground from "@/components/GalaxyBackground";

export default function ProjectsClient() {
    return (
        <main className="relative min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-12 lg:px-24 overflow-hidden">
            <GalaxyBackground />

            <div className="max-w-7xl mx-auto relative z-10">
                <Link
                    href="/"
                    className="flex items-center gap-2 text-neutral-500 hover:text-white transition-colors mb-12 group"
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
                        Archive<span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        A curated collection of full-stack applications,
                        3D experiments, and digital brand experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            data-project-card="true"
                            className="block group h-full"
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-6 md:p-10 h-full flex flex-col justify-between hover:border-primary/50 transition-all relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={24} className="text-primary" />
                                </div>

                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-neutral-400 leading-relaxed max-w-sm mb-8">
                                        {project.description}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.tags.slice(0, 3).map((tech) => (
                                        <span key={tech} className="text-[10px] uppercase tracking-tighter px-2 py-1 rounded bg-white/5 border border-white/5 text-neutral-500">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.tags.length > 3 && (
                                        <span className="text-[10px] uppercase tracking-tighter px-2 py-1 text-neutral-600">
                                            +{project.tags.length - 3}
                                        </span>
                                    )}
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
