"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Code2, Database, Info } from "lucide-react";
import GalaxyBackground from "@/components/GalaxyBackground";
import { Project } from "@/content/projects";

export default function ProjectContent({ project }: { project: Project }) {
    return (
        <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-7xl mx-auto">
            <GalaxyBackground />

            <Link
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to projects
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                {/* Left Column: Title and Description */}
                <div className="lg:col-span-2">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            {project.category}
                        </span>
                        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                            {project.title}
                        </h1>
                        <p className="text-xl text-neutral-300 leading-relaxed mb-12">
                            {project.fullDescription}
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-6 md:p-8"
                        >
                            <div className="flex items-center gap-3 mb-6 text-primary">
                                <Code2 size={24} />
                                <h3 className="font-bold text-lg">Frontend Stack</h3>
                            </div>
                            <ul className="space-y-3">
                                {project.technicalDetails.frontend.map(item => (
                                    <li key={item} className="text-neutral-400 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-primary rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="glass-card p-6 md:p-8"
                        >
                            <div className="flex items-center gap-3 mb-6 text-accent">
                                <Database size={24} />
                                <h3 className="font-bold text-lg">Backend Stack</h3>
                            </div>
                            <ul className="space-y-3">
                                {project.technicalDetails.backend.map(item => (
                                    <li key={item} className="text-neutral-400 flex items-center gap-2">
                                        <div className="w-1 h-1 bg-accent rounded-full" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Info className="text-neutral-500" />
                            Project Highlights
                        </h3>
                        <div className="space-y-4">
                            {project.highlights.map((highlight, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="glass-card p-6 flex items-start gap-4"
                                >
                                    <span className="text-primary font-mono text-xl">0{idx + 1}</span>
                                    <p className="text-neutral-300">{highlight}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Actions and Tags */}
                <div className="relative">
                    <div className="sticky top-32 space-y-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="glass-card p-8"
                        >
                            <h3 className="font-bold mb-6 text-lg">Project Links</h3>
                            <div className="space-y-4">
                                {project.demo && (
                                    <Link
                                        href={project.demo}
                                        target="_blank"
                                        className="premium-button w-full flex items-center justify-center gap-2"
                                    >
                                        Live Preview <ExternalLink size={18} />
                                    </Link>
                                )}
                                {project.github && (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-full border border-white/10 hover:bg-white/5 transition-all text-neutral-300 hover:text-primary hover:border-primary/50"
                                    >
                                        Source Code <Github size={18} />
                                    </Link>
                                )}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                            className="glass-card p-8"
                        >
                            <h3 className="font-bold mb-6 text-lg">Technologies</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs font-medium text-neutral-400 border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </main>
    );
}
