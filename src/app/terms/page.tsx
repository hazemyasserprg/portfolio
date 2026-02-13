"use client";

import { motion } from "framer-motion";
import GalaxyBackground from "@/components/GalaxyBackground";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
                <h1 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">Terms of Service</h1>

                <div className="glass-card p-6 md:p-12 space-y-8 text-neutral-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
                        <p>
                            By accessing this website, you agree to be bound by these Terms of Service.
                            If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Intellectual Property</h2>
                        <p>
                            All content, including designs, text, and 3D scenes on this website, is the intellectual property
                            of Hazem Yasser unless otherwise stated. You may not reproduce, distribute, or use this content
                            for commercial purposes without explicit permission.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Use License</h2>
                        <p>
                            Permission is granted to temporarily download one copy of the materials on this website for
                            personal, non-commercial transitory viewing only.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
                        <p>
                            Hazem Yasser shall not be held liable for any damages arising out of the use or inability
                            to use the materials on this website, even if notified orally or in writing of the
                            possibility of such damage.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
                        <p>
                            These terms and conditions are governed by and construed in accordance with the laws
                            applicable to digital services in Egypt.
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
