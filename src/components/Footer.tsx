"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Instagram, ArrowUpRight, Globe } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-US", {
                hour12: true,
                hour: "numeric",
                minute: "numeric",
                timeZone: "Africa/Cairo" // Adjust to your timezone
            }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="w-full bg-black pt-24 pb-12 px-6 border-t border-white/5 relative overflow-hidden">
            {/* Background Large Text */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-[15vw] md:text-[10vw] font-bold text-white/[0.02] whitespace-nowrap pointer-events-none select-none uppercase tracking-tighter will-change-transform">
                Hazem Yasser
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter mb-6 inline-block">
                            HAZEM<span className="text-primary">.</span>
                        </Link>
                        <p className="text-neutral-500 max-w-sm text-lg leading-relaxed">
                            Crafting high-performance web experiences and interactive 3D worlds.
                            Let&apos;s turn your vision into a digital reality.
                        </p>
                    </div>

                    {/* Sitemap */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Sitemap</h4>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "Projects", href: "/#projects" },
                                { name: "Journey", href: "/#experience" },
                                { name: "About", href: "/#about" },
                                { name: "Contact", href: "/#contact" }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link
                                        href={item.href}
                                        className="text-neutral-500 hover:text-white transition-colors flex items-center gap-1 group"
                                    >
                                        {item.name}
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials & Time */}
                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">Connect</h4>
                        <div className="flex gap-4 mb-8">
                            <Link href="https://github.com/hazemyasserprg" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-neutral-400 hover:text-primary hover:scale-110"><Github size={20} /></Link>
                            <Link href="https://linkedin.com/in/hazem-dev" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-neutral-400 hover:text-[#0077b5] hover:scale-110"><Linkedin size={20} /></Link>
                            <Link href="https://x.com/HazemYa23091301" target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-all text-neutral-400 hover:text-[#1da1f2] hover:scale-110"><Twitter size={20} /></Link>
                        </div>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-neutral-500 text-sm">
                                <Globe size={14} />
                                <span>Cairo, Egypt</span>
                            </div>
                            <div className="flex items-center gap-2 text-neutral-400 font-mono text-sm uppercase">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                                {time} EEST
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-neutral-600 text-sm font-medium">
                        © {new Date().getFullYear()} Hazem Yasser. All rights reserved.
                    </p>
                    <div className="flex gap-8 text-neutral-600 text-sm font-medium">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
