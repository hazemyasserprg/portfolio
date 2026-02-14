"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import GalaxyBackground from "@/components/GalaxyBackground";
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen pt-24 md:pt-32 px-4 md:px-12 lg:px-24 overflow-hidden">
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
                    className="mb-12"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-tight">
                        Contact<span className="text-primary">.</span>
                    </h1>
                    <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                        Let's build something amazing together. Reach out for opportunities or just to say hello.
                    </p>
                </motion.div>

                <Contact />
            </div>
        </main>
    );
}
