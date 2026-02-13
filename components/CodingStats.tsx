"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

type GitHubStats = {
    public_repos: number;
    followers: number;
    created_at: string;
};

export default function CodingStats() {
    const [stats, setStats] = useState<GitHubStats | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchStats() {
            try {
                const response = await fetch("https://api.github.com/users/Tenneti02");
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();
                setStats(data);
            } catch (err) {
                console.error(err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }
        fetchStats();
    }, []);

    const totalContributions = stats
        ? (stats.public_repos * 20 + stats.followers * 5) + "+" // Approximation as per original code
        : "--";

    const formattedDate = stats?.created_at
        ? new Date(stats.created_at).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
        })
        : "--";

    return (
        <section
            id="coding-stats"
            className="py-12 bg-neo-black text-white border-y-4 border-black relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage:
                        "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            ></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="flex justify-between items-center mb-6 border-b-2 border-white pb-3">
                    <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-tight">
                        CODING<span className="text-neo-green">_STATS</span>
                    </h2>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <p className="font-mono text-neo-green text-xs font-bold">LIVE</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:auto-rows-fr">
                    {/* GitHub Column */}
                    <Reveal className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
                            <div className="w-8 h-8 bg-neo-green border-2 border-white flex items-center justify-center">
                                <i className="ri-github-fill text-lg text-black"></i>
                            </div>
                            <h3 className="text-2xl font-black uppercase text-white">GITHUB</h3>
                        </div>

                        <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <i className="ri-github-fill text-3xl text-neo-green"></i>
                                    <div>
                                        <h4 className="text-xl font-black text-white leading-tight">
                                            Tenneti02
                                        </h4>
                                        <p className="text-[10px] font-mono text-neo-green uppercase tracking-widest">
                                            Midnight Coder
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-neo-green tracking-tighter">
                                        {totalContributions}
                                    </div>
                                    <p className="text-[8px] font-mono text-gray-500 uppercase">
                                        Commits
                                    </p>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4 mb-8 uppercase">
                                {[
                                    { label: "Repositories", value: stats?.public_repos || "--" },
                                    { label: "Followers", value: stats?.followers || "--" },
                                    { label: "Commits", value: totalContributions },
                                    { label: "Joined", value: formattedDate },
                                ].map((item, i) => (
                                    <div
                                        key={i}
                                        className="border-2 border-neo-green/30 bg-neo-black/60 p-4 relative group overflow-hidden hover:border-neo-green transition-colors shadow-[4px_4px_0_rgba(51,255,87,0.1)]"
                                    >
                                        <div className="text-[9px] font-mono text-neo-green mb-1 uppercase tracking-widest opacity-70">
                                            {item.label}
                                        </div>
                                        <div className="text-white font-black text-xl md:text-3xl tracking-tighter">
                                            {loading ? "..." : error ? "ERR" : item.value}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex-1 flex flex-col justify-center mb-8">
                                <div className="bg-black border-2 border-neo-green/30 p-2 overflow-hidden shadow-[4px_4px_0_rgba(51,255,87,0.1)] group hover:border-neo-green transition-colors duration-500 relative">
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neo-green rounded-full animate-pulse"></div>
                                    <p className="text-[8px] font-mono text-neo-green/50 uppercase tracking-[0.2em] mb-1">
                                        Matrix_Output
                                    </p>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="https://ghchart.rshah.org/33FF57/Tenneti02"
                                        alt="GitHub Contribution Graph"
                                        className="w-full h-auto filter brightness-110"
                                        style={{ imageRendering: "auto" }}
                                    />
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between text-neo-green p-3 border-2 border-white/10 bg-neo-black font-mono text-[11px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/30">$</span>
                                    <span className="text-neo-green">gh --stats</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                                <a
                                    href="https://github.com/Tenneti02"
                                    target="_blank"
                                    className="text-neo-green px-3 py-1 font-black uppercase border border-neo-green hover:bg-neo-green hover:text-black transition-all"
                                >
                                    VIEW_GH →
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* LeetCode Column */}
                    <Reveal className="flex flex-col h-full">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/20 pb-2">
                            <div className="w-8 h-8 bg-neo-orange border-2 border-white flex items-center justify-center">
                                <i className="ri-code-box-fill text-lg text-black"></i>
                            </div>
                            <h3 className="text-2xl font-black uppercase text-white">
                                LEETCODE
                            </h3>
                        </div>

                        <div className="border-4 border-white/20 p-6 bg-black flex-1 flex flex-col shadow-[8px_8px_0_rgba(0,0,0,1)] relative group">
                            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                                <div className="flex items-center gap-3">
                                    <i className="ri-code-box-fill text-3xl text-neo-orange"></i>
                                    <div>
                                        <h4 className="text-xl font-black text-white leading-tight">
                                            Tenneti02
                                        </h4>
                                        <p className="text-[10px] font-mono text-neo-orange uppercase tracking-widest">
                                            Problem solver
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="text-2xl font-black text-neo-orange tracking-tighter">
                                        #Top
                                    </div>
                                    <p className="text-[8px] font-mono text-gray-500 uppercase">
                                        Ranking
                                    </p>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col justify-center mb-8">
                                <div className="border-2 border-neo-orange/30 p-2 overflow-hidden bg-black shadow-[4px_4px_0_rgba(255,107,0,0.1)] group hover:border-neo-orange transition-colors duration-500 relative">
                                    <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-neo-orange rounded-full animate-pulse"></div>
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="https://leetcard.jacoblin.cool/Tenneti02?theme=dark&font=Ubuntu&ext=heatmap"
                                        alt="LeetCode Stats"
                                        className="w-full h-auto object-contain filter contrast-125"
                                    />
                                </div>
                            </div>

                            <div className="mt-auto flex items-center justify-between text-neo-orange p-3 border-2 border-white/10 bg-neo-black font-mono text-[11px]">
                                <div className="flex items-center gap-2">
                                    <span className="text-white/30">$</span>
                                    <span className="text-neo-orange">leetcode --u</span>
                                    <span className="animate-pulse">_</span>
                                </div>
                                <a
                                    href="https://leetcode.com/u/Tenneti02/"
                                    target="_blank"
                                    className="text-neo-orange px-3 py-1 font-black uppercase border border-neo-orange hover:bg-neo-orange hover:text-black transition-all"
                                >
                                    VIEW_LC →
                                </a>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
