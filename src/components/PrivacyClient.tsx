"use client";

import { motion } from "framer-motion";
import GalaxyBackground from "@/components/GalaxyBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function PrivacyClient() {
    return (
        <main className="min-h-screen pt-24 md:pt-32 pb-24 px-4 md:px-6 max-w-4xl mx-auto">
            <GalaxyBackground />

            <Link
                href="/"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white mb-12 transition-colors group"
            >
                <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Privacy Policy</h1>

                <div className="glass-card p-6 md:p-12 space-y-8 text-neutral-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
                        <p>
                            Your privacy is important. This Privacy Policy explains how Hazem Yasser ("we", "us", or "our")
                            collects, uses, and protects your information when you visit our portfolio website and
                            interact with our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                        <p className="mb-4">
                            We may collect information that you voluntarily provide through my contact form, including:
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email Address</li>
                            <li>Message Content</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                        <p>
                            Information collected is used solely to communicate with you regarding your inquiries.
                            We do not sell, trade, or otherwise transfer your information to third parties for marketing purposes.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                        <p>
                            We implement a variety of security measures to maintain the safety of your personal information.
                            Your contact form submissions are processed through secure integration with Notion.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Cookies</h2>
                        <p>
                            This site uses minimal cookies for essential functionality and to enhance your browsing experience.
                            You can choose to disable cookies through your browser settings.
                        </p>
                    </section>

                    <section className="pt-8 border-t border-white/5 text-sm text-neutral-500">
                        Last Updated: February 2026
                    </section>
                </div>
            </motion.div>
        </main>
    );
}
