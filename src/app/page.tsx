"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Instagram, Twitter } from "lucide-react";
import Link from "next/link";
import GalaxyBackground from "@/components/GalaxyBackground";
import HeroScene from "@/components/HeroScene";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Experience from "@/components/Experience";
import { useSmoothScroll } from "@/components/SmoothScroll";
import { projects } from "@/content/projects";

export default function Home() {
    const lenis = useSmoothScroll();
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-4 md:p-12 lg:p-24 overflow-hidden">
            <GalaxyBackground />

            {/* Hero Section */}
            <div className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center py-32 md:py-20 overflow-hidden">
                {/* 3D Scene integrated behind text */}
                <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full h-full max-w-4xl opacity-50">
                        <HeroScene />
                    </div>
                </div>

                <div className="z-10 max-w-7xl w-full flex flex-col items-center text-center px-6 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center"
                    >
                        <span className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] sm:text-sm font-medium text-primary mb-8 inline-block backdrop-blur-md uppercase tracking-wider">
                            Available for new opportunities
                        </span>
                        <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 drop-shadow-2xl">
                            Building Digital Worlds from <br className="hidden sm:block" />
                            <span className="text-gradient">Database to Pixels</span>
                        </h1>
                        <p className="text-sm sm:text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-lg px-4">
                            I&apos;m Hazem Yasser, a Full-Stack Developer specializing in high-performance
                            web applications and immersive 3D experiences.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pointer-events-auto w-full sm:w-auto">
                            <Link
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    lenis?.scrollTo("#projects", { offset: -80 });
                                }}
                                className="premium-button text-base md:text-lg px-8 py-3.5 md:px-10 md:py-4 flex items-center justify-center shadow-2xl w-full sm:w-auto min-w-[160px]"
                            >
                                View Work
                            </Link>
                            <Link
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    lenis?.scrollTo("#contact", { offset: -80 });
                                }}
                                className="px-8 py-3.5 md:px-10 md:py-4 rounded-full border border-white/10 text-base md:text-lg font-medium hover:bg-white/5 transition-all backdrop-blur-sm w-full sm:w-auto min-w-[160px] text-center"
                            >
                                Get in Touch
                            </Link>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="mt-20 md:mt-24 flex gap-6 md:gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all bg-white/5 px-6 md:px-8 py-4 rounded-full border border-white/5 backdrop-blur-sm pointer-events-auto"
                    >
                        <Link href="https://github.com/hazemyasserprg" target="_blank" aria-label="Github Profile" className="hover:text-primary transition-colors"><Github size={24} /></Link>
                        <Link href="https://linkedin.com/in/hazem-dev" target="_blank" aria-label="LinkedIn Profile" className="hover:text-[#0077b5] transition-colors"><Linkedin size={24} /></Link>
                        <Link href="https://instagram.com/hazem_yasser_" target="_blank" aria-label="Instagram Profile" className="hover:text-[#e4405f] transition-colors"><Instagram size={24} /></Link>
                        <Link href="https://x.com/HazemYa23091301" target="_blank" aria-label="X (Twitter) Profile" className="hover:text-[#1da1f2] transition-colors"><Twitter size={24} /></Link>
                    </motion.div>
                </div>
            </div>

            {/* Basic Featured Section */}
            <section id="projects" className="mt-24 md:mt-48 w-full max-w-7xl relative z-10">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 mb-16">
                    <div>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Selected Work</h2>
                        <p className="text-neutral-500 text-base md:text-lg">A showcase of full-stack and 3D projects.</p>
                    </div>
                    <Link href="/projects" className="group flex items-center gap-2 text-lg font-medium hover:text-primary transition-colors">
                        All Projects <ArrowUpRight size={22} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
                    {projects.slice(0, 3).map((project, index) => (
                        <Link
                            key={project.slug}
                            href={`/projects/${project.slug}`}
                            data-project-card="true"
                            className="group relative h-full"
                        >    <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="glass-card min-h-[300px] p-6 md:p-10 group cursor-pointer hover:border-primary/50 transition-all flex flex-col justify-between overflow-hidden relative h-full"
                        >
                                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ArrowUpRight size={32} className="text-primary" />
                                </div>
                                <div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary mb-4 block">{project.category}</span>
                                    <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                                </div>
                                <p className="text-base md:text-lg text-neutral-400 group-hover:text-neutral-200 transition-colors max-w-md">
                                    {project.description}
                                </p>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Journey Section */}
            <Experience />

            {/* Skills Section */}
            <Skills />
            <Contact />
        </main>
    );
}
