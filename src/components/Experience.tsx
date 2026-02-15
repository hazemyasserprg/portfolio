"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import { SpotlightCard } from "./SpotlightCard";

const experiences = [
    {
        role: "Full-Stack Web Developer",
        company: "Notion Arabs",
        period: "2025 - Present",
        description: "Built web applications with React, Next.js, and Node.js. Created responsive UI using Tailwind CSS. Implemented REST APIs and backend logic. Worked with Git, version control, and deployment.",
        icon: <Briefcase size={24} className="text-primary" />
    },
    {
        role: "Computer Science",
        company: "El Shorouk Academy",
        period: "2022 - 2026",
        description: "Bachelor of Science in Computer Science. Specialized in advanced algorithms and software engineering.",
        icon: <GraduationCap size={24} className="text-accent" />
    }
];

export default function Experience() {
    return (
        <section id="experience" className="py-24 w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Journey</h2>
                <p className="text-neutral-500 max-w-xl text-lg">
                    My professional and academic path in the world of computer science.
                </p>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                    >
                        <SpotlightCard className="p-6 md:p-10">
                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 h-full">
                                <div className="flex flex-col sm:flex-row items-start gap-6">
                                    <div className="p-4 rounded-2xl bg-white/5 group-hover:scale-110 transition-transform">
                                        {exp.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold mb-1">{exp.role}</h3>
                                        <p className="text-primary font-medium mb-4">{exp.company}</p>
                                        <p className="text-neutral-400 max-w-2xl leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 text-neutral-500 font-mono text-sm bg-white/5 px-4 py-2 rounded-full border border-white/5 w-fit h-fit">
                                    <Calendar size={14} />
                                    {exp.period}
                                </div>
                            </div>
                        </SpotlightCard>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
