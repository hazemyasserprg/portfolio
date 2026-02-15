"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Twitter, Send, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";
import { submitToNotion } from "@/app/actions/contact";

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            const result = await submitToNotion(formData);
            if (result.success) {
                setIsSubmitted(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setError(result.error || "Something went wrong. Please try again.");
            }
        } catch (err) {
            setError("Failed to connect to the server.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="glass-card p-6 md:p-12 lg:p-24 relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,transparent_70%)] -z-10 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[radial-gradient(circle,rgba(16,185,129,0.2)_0%,transparent_70%)] -z-10 pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight">
                                Let&apos;s build something <br className="hidden sm:block" />
                                <span className="text-gradient">legendary together</span>.
                            </h2>
                            <p className="text-base md:text-xl text-neutral-400 mb-12 leading-relaxed max-w-md">
                                Whether you have a specific project in mind or just want to chat about
                                the future of the web, my inbox is always open.
                            </p>

                            <div className="flex items-center gap-8">
                                <Link href="https://github.com/hazemyasserprg" target="_blank" className="hover:text-primary transition-colors hover:scale-110 active:scale-95 duration-200"><Github size={32} /></Link>
                                <Link href="https://linkedin.com/in/hazem-dev" target="_blank" className="hover:text-[#0077b5] transition-colors hover:scale-110 active:scale-95 duration-200"><Linkedin size={32} /></Link>
                                <Link href="https://x.com/HazemYa23091301" target="_blank" className="hover:text-[#1da1f2] transition-colors hover:scale-110 active:scale-95 duration-200"><Twitter size={32} /></Link>
                            </div>
                        </motion.div>
                    </div>

                    <div className="bg-white/5 rounded-2xl border border-white/10 p-8">
                        {isSubmitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <CheckCircle2 size={64} className="text-accent mx-auto mb-6" />
                                <h3 className="text-2xl font-bold mb-2">Message Received!</h3>
                                <p className="text-neutral-400">I&apos;ll get back to you across the cosmos soon.</p>
                                <button
                                    onClick={() => setIsSubmitted(false)}
                                    className="mt-8 text-primary font-medium hover:underline"
                                >
                                    Send another message
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-neutral-400 mb-2">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-neutral-400 mb-2">Email Address</label>
                                    <input
                                        required
                                        type="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors"
                                        placeholder="Enter your email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-neutral-400 mb-2">Message</label>
                                    <textarea
                                        required
                                        id="message"
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary/50 transition-colors resize-none"
                                        placeholder="Tell me about your project..."
                                    />
                                </div>

                                {error && (
                                    <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-4 rounded-xl text-sm border border-red-400/20">
                                        <AlertCircle size={16} />
                                        {error}
                                    </div>
                                )}

                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className="premium-button w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                                >
                                    {isSubmitting ? (
                                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
