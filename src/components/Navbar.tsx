"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useSmoothScroll } from "./SmoothScroll";
import { useRouter, usePathname } from "next/navigation";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/#projects" },
    { name: "Journey", href: "/#experience" },
    { name: "About", href: "/#about" },
    { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const lenis = useSmoothScroll();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen && lenis) {
            lenis.stop();
            document.body.style.overflow = "hidden";
        } else if (lenis) {
            lenis.start();
            document.body.style.overflow = "auto";
        }

        return () => {
            if (lenis) {
                lenis.start();
                document.body.style.overflow = "auto";
            }
        };
    }, [mobileMenuOpen, lenis]);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (mobileMenuOpen) {
            setMobileMenuOpen(false);
            if (lenis) {
                lenis.start();
                document.body.style.overflow = "auto";
            }
        }

        if (pathname === "/") {
            if (href === "/") {
                e.preventDefault();
                lenis?.scrollTo(0);
            } else if (href.startsWith("/#")) {
                const id = href.replace("/#", "");
                const element = document.getElementById(id);
                if (element && lenis) {
                    e.preventDefault();
                    // Small timeout to allow state updates and scroll unlocking
                    setTimeout(() => {
                        lenis.scrollTo(element, { offset: -80 });
                    }, 50);
                }
            }
        }
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ${isScrolled || mobileMenuOpen
                    ? "py-4 bg-black/80 backdrop-blur-lg border-b border-white/5"
                    : "py-8 bg-transparent"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                    <Link href="/" onClick={(e) => handleNavClick(e, "/")} className="text-xl font-bold tracking-tighter hover:opacity-70 transition-opacity">
                        HAZEM<span className="text-primary text-2xl">.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-8 items-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="mailto:contact@hazem.vip"
                            className="px-5 py-2 rounded-full border border-white/10 text-sm font-medium hover:bg-white hover:text-black transition-all"
                        >
                            Hire Me
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white p-2 -mr-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                    >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3, ease: "circOut" }}
                        className="fixed inset-0 bg-black z-[55] flex flex-col items-center justify-center p-6 md:hidden"
                    >
                        <div className="flex flex-col gap-8 w-full max-w-sm">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-4xl font-bold hover:text-primary transition-colors block text-center"
                                        onClick={(e) => handleNavClick(e, link.href)}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mt-8"
                            >
                                <Link
                                    href="mailto:contact@hazem.vip"
                                    className="w-full py-4 rounded-2xl bg-white text-black text-center font-bold text-lg block"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Hire Me
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
