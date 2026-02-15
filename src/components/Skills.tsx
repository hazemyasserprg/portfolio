"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Globe, Cpu, Palette } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const skillGroups = [
    {
        title: "Frontend Development",
        icon: <Layout className="text-primary" size={32} />,
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js"],
        delay: 0.1
    },
    {
        title: "Backend Development",
        icon: <Database className="text-accent" size={32} />,
        skills: ["Node.js", "Express", "REST APIs", "PostgreSQL", "MongoDB", "Auth.js"],
        delay: 0.2
    },
    {
        title: "Creative & Engineering",
        icon: <Palette className="text-purple-500" size={32} />,
        skills: ["UI/UX Design", "Figma", "WebGL", "Performance Optimization", "SEO", "Accessibility"],
        delay: 0.3
    },
    {
        title: "Tools & Workflow",
        icon: <Cpu className="text-orange-500" size={32} />,
        skills: ["Git", "Docker", "Vercel", "Postman", "Linux", "Cursor / AI Tools"],
        delay: 0.4
    }
];

export default function Skills() {
    return (
        <section id="about" className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Technical Prowess</h2>
                <p className="text-neutral-500 max-w-xl text-base md:text-lg">
                    I bridge the gap between complex logic and stunning user interfaces,
                    crafting experiences that are as fast as they are beautiful.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skillGroups.map((group) => (
                    <motion.div
                        key={group.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: group.delay, duration: 0.5 }}
                        className="h-full"
                    >
                        <SpotlightCard className="p-6 md:p-8 h-full">
                            <div className="mb-6 p-4 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                {group.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-6">{group.title}</h3>
                            <ul className="space-y-3">
                                {group.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-2 text-neutral-400 group-hover:text-neutral-200 transition-colors text-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-colors" />
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
