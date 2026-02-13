"use client";

import { useState, useEffect } from "react";
import Reveal from "./Reveal";
import Link from "next/link";

const roles = [
    { line1: "FULL STACK", line2: "DEVELOPER" },
    { line1: "GEN AI", line2: "DEVELOPER" },
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayLine1, setDisplayLine1] = useState("");
    const [displayLine2, setDisplayLine2] = useState("");
    const [phase, setPhase] = useState<"typing1" | "typing2" | "pause" | "deleting2" | "deleting1">("typing1");

    useEffect(() => {
        const current = roles[roleIndex];
        let timeout: NodeJS.Timeout;

        switch (phase) {
            case "typing1":
                if (displayLine1.length < current.line1.length) {
                    timeout = setTimeout(() => setDisplayLine1(current.line1.slice(0, displayLine1.length + 1)), 80);
                } else {
                    setPhase("typing2");
                }
                break;
            case "typing2":
                if (displayLine2.length < current.line2.length) {
                    timeout = setTimeout(() => setDisplayLine2(current.line2.slice(0, displayLine2.length + 1)), 80);
                } else {
                    timeout = setTimeout(() => setPhase("deleting2"), 2000);
                }
                break;
            case "deleting2":
                if (displayLine2.length > 0) {
                    timeout = setTimeout(() => setDisplayLine2(displayLine2.slice(0, -1)), 40);
                } else {
                    setPhase("deleting1");
                }
                break;
            case "deleting1":
                if (displayLine1.length > 0) {
                    timeout = setTimeout(() => setDisplayLine1(displayLine1.slice(0, -1)), 40);
                } else {
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                    setPhase("typing1");
                }
                break;
        }

        return () => clearTimeout(timeout);
    }, [displayLine1, displayLine2, phase, roleIndex]);

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center px-4 pt-20 relative overflow-hidden border-b-4 border-black"
        >
            {/* Decorations */}
            <div className="absolute top-1/3 left-[10%] w-16 h-16 bg-neo-blue border-4 border-black shadow-hard animate-bounce hidden lg:block rotate-12"></div>
            <div className="absolute bottom-1/3 right-[10%] w-24 h-24 bg-neo-pink rounded-full border-4 border-black shadow-hard hidden lg:block animate-pulse"></div>
            <div className="absolute top-20 right-20 text-9xl opacity-5 font-black select-none pointer-events-none">
                TSVS
            </div>

            <div className="relative z-10 text-center max-w-5xl">
                <Reveal>
                    <div className="inline-block bg-neo-white border-2 border-black px-4 py-1 mb-6 shadow-hard -rotate-2">
                        <span className="font-mono font-bold text-neo-green bg-black px-2 mr-2">
                            ●
                        </span>
                        <span className="font-mono font-bold">
                            SYSTEM STATUS: ONLINE
                        </span>
                    </div>
                </Reveal>


                <Reveal>
                    <h1 className="text-[13vw] md:text-[10vw] leading-[0.85] font-black uppercase tracking-tighter mb-2 mix-blend-darken min-h-[1.7em] md:min-h-[1.8em]">
                        <span className="block text-black">
                            {displayLine1}
                            {(phase === "typing1" || phase === "deleting1") && (
                                <span className="inline-block w-[3px] h-[0.8em] bg-neo-red ml-1 animate-pulse align-middle"></span>
                            )}
                        </span>
                        <span className="block text-white text-stroke-black">
                            {displayLine2}
                            {(phase === "typing2" || phase === "deleting2" || phase === "pause") && (
                                <span className="inline-block w-[3px] h-[0.8em] bg-neo-red ml-1 animate-pulse align-middle"></span>
                            )}
                        </span>
                    </h1>
                </Reveal>

                <Reveal>
                    <p className="font-mono text-lg md:text-2xl max-w-2xl mx-auto mb-10 bg-neo-yellow border-2 border-black p-4 shadow-hard rotate-1">
                        I build digital products that refuse to be boring.
                        <br />
                        <b>React • Python • Java • Node</b>
                    </p>
                </Reveal>

                <Reveal>
                    <div className="flex flex-col md:flex-row justify-center gap-6">
                        <Link
                            href="#projects"
                            className="bg-black text-white border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-green hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover"
                        >
                            VIEW DATABASE
                        </Link>
                        <a
                            href="/Assets/Resume/RESUME.T.pdf"
                            download
                            className="bg-neo-white text-black border-2 border-black px-10 py-5 text-xl font-bold shadow-hard hover:bg-neo-pink hover:text-black hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all cursor-hover flex items-center justify-center gap-2"
                        >
                            <i className="ri-download-line"></i> DOWNLOAD CV
                        </a>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
