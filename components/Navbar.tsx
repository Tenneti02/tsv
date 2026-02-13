"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { name: "/ABOUT", href: "#about" },
        { name: "/SKILLS", href: "#skills" },
        { name: "/LOGS", href: "#experience" },
        { name: "/WORK", href: "#projects" },
    ];

    return (
        <nav className="fixed top-0 w-full z-50 px-4 py-4 pointer-events-none">
            <div className="max-w-7xl mx-auto flex justify-between items-center pointer-events-auto">
                <Link
                    href="#hero"
                    className="bg-neo-white border-2 border-black px-4 py-1 text-2xl font-black shadow-hard hover:bg-neo-yellow transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none cursor-hover block"
                >
                    TSVS.exe
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-4 bg-white border-2 border-black p-2 shadow-hard">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="px-3 py-1 font-mono font-bold text-sm hover:bg-black hover:text-white transition-colors cursor-hover block"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="px-3 py-1 font-mono font-bold text-sm bg-neo-yellow border border-black hover:bg-neo-pink transition-colors cursor-hover block"
                    >
                        HIRE ME
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden bg-white border-2 border-black p-2 shadow-hard hover:bg-neo-yellow transition-all cursor-hover"
                    aria-label="Toggle menu"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span
                            className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        ></span>
                        <span
                            className={`block h-0.5 bg-black transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""
                                }`}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed top-0 right-0 h-screen w-72 bg-neo-white border-l-4 border-black shadow-hard-xl transform transition-transform duration-300 pointer-events-auto ${menuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 pt-20 flex flex-col gap-2">
                    <div className="font-mono text-xs text-gray-400 mb-4 border-b-2 border-black pb-2">
                        // NAVIGATION
                    </div>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3 font-mono font-bold text-lg hover:bg-black hover:text-white border-2 border-transparent hover:border-black transition-all cursor-hover block"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-3 font-mono font-bold text-lg bg-neo-yellow border-2 border-black hover:bg-neo-pink transition-all cursor-hover block mt-4 text-center shadow-hard"
                    >
                        HIRE ME
                    </Link>
                </div>
            </div>

            {/* Backdrop */}
            {menuOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-black/50 pointer-events-auto"
                    onClick={() => setMenuOpen(false)}
                ></div>
            )}
        </nav>
    );
}
