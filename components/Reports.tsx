export default function Reports() {
    const reports = [
        {
            id: "001",
            year: "2025",
            from: "Student @ L J University",
            text: '"TSVS Proved no matter how pressure or less time is he makes projects complete outstandingly"',
            bgClass: "bg-neo-green",
            textColorClass: "text-neo-green",
            hoverBorderClass: "hover:border-neo-green/50",
            starColorClass: "text-neo-green/60",
        },
        {
            id: "002",
            year: "2025",
            from: "CEO @ Alpha Consultancy",
            text: '"Fast, reliable, and actually has good taste in design. A rare combination."',
            bgClass: "bg-neo-blue",
            textColorClass: "text-neo-blue",
            hoverBorderClass: "hover:border-neo-blue/50",
            starColorClass: "text-neo-blue/60",
        },
        {
            id: "003",
            year: "2025",
            from: "Student @ L J University",
            text: '"Cleanest code I\'ve seen in years. He knows how to handle complex state management."',
            bgClass: "bg-neo-pink",
            textColorClass: "text-neo-pink",
            hoverBorderClass: "hover:border-neo-pink/50",
            starColorClass: "text-neo-pink/60",
        },
        {
            id: "004",
            year: "2025",
            from: "Dev @ CreativeChaos",
            text: '"Creative designing idea and provided a Unique UI experience."',
            bgClass: "bg-neo-purple",
            textColorClass: "text-neo-purple",
            hoverBorderClass: "hover:border-neo-purple/50",
            starColorClass: "text-neo-purple/60",
        },
        {
            id: "005",
            year: "2025",
            from: "UX Designer @ TechFlow",
            text: '"Highly intuitive UX. Delivered exactly what we needed before we even knew we needed it."',
            bgClass: "bg-neo-orange",
            textColorClass: "text-neo-orange",
            hoverBorderClass: "hover:border-neo-orange/50",
            starColorClass: "text-neo-orange/60",
        },
    ];

    /* Duplicate for scrolling effect */
    const allReports = [...reports, ...reports];

    return (
        <section
            id="reports"
            className="py-24 bg-neo-black border-t-4 border-black overflow-hidden relative"
        >
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center gap-2 mb-16 bg-white/5 border-2 border-white/10 p-4 shadow-hard shadow-neo-blue/20">
                    <div className="flex gap-2">
                        <div className="h-3 w-3 bg-red-500 rounded-full border border-black"></div>
                        <div className="h-3 w-3 bg-yellow-500 rounded-full border border-black"></div>
                        <div className="h-3 w-3 bg-green-500 rounded-full border border-black"></div>
                    </div>
                    <h2 className="font-mono text-white text-xl font-bold ml-4 tracking-tighter">
                        USER_REPORTS.txt
                    </h2>
                    <div className="ml-8 px-2 bg-neo-blue text-black text-[10px] font-black uppercase">
                        LIVE_FEED
                    </div>
                </div>
            </div>

            <div className="marquee-container group cursor-hover">
                <div className="marquee-content flex gap-8 py-12 px-4 select-none">
                    {allReports.map((report, index) => (
                        <div
                            key={index}
                            className={`shrink-0 w-[450px] bg-neo-black border-4 border-white/10 p-8 shadow-hard ${report.hoverBorderClass} hover:-translate-y-2 transition-all duration-500 relative group/card overflow-hidden text-left whitespace-normal`}
                        >
                            <div className={`absolute top-0 left-0 w-full h-1 ${report.bgClass}`}></div>
                            <div className="absolute -top-4 -right-4 w-12 h-12 bg-white/5 rotate-45"></div>
                            <div className="flex justify-between items-start mb-6">
                                <div className={`font-mono ${report.textColorClass} text-xs font-bold tracking-widest uppercase`}>
                                    REPORT_{report.id}.log
                                </div>
                                <div className="text-[10px] font-mono text-gray-500">
                                    {report.year}.txt
                                </div>
                            </div>
                            <div className="font-mono text-gray-400 text-[10px] mb-2 uppercase tracking-tight">
                                FROM: {report.from}
                            </div>
                            <p className="font-bold text-xl leading-snug mb-6 text-white/90">
                                {report.text}
                            </p>
                            <div className={`flex ${report.starColorClass} gap-1 text-lg`}>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
