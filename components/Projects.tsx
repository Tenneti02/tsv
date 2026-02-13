import Reveal from "./Reveal";

export default function Projects() {
    const projects = [
        {
            title: "Online Bookstore",
            desc: "Developed a responsive online bookstore with advanced search functionality, improving accessibility and user satisfaction by 25%. Rolled out real-time content updates for book availability.",
            tech: ["React.js", "Node.js", "MongoDB", "HTML", "CSS", "JavaScript"],
            link: "#",
            icon: "ri-book-open-line",
            bgColor: "bg-neo-purple",
            hoverColorClass: "group-hover:text-neo-purple",
            featured: true,
        },
        {
            title: "Flappy Bird Game",
            desc: "Created a browser-based version of Flappy Bird, optimizing game performance for smooth gameplay. Revamped controls and animations, improving user engagement by 20%.",
            tech: ["HTML", "CSS", "JavaScript"],
            link: "#",
            icon: "ri-gamepad-line",
            bgColor: "bg-neo-blue",
            hoverColorClass: "group-hover:text-neo-blue",
            featured: false,
            className: "mt-0 md:mt-20",
        },
        {
            title: "Facial Recognition",
            desc: "Built a facial recognition system achieving a 95% accuracy rate for face detection. Refined image processing techniques to optimize recognition speed and accuracy.",
            tech: ["Python", "OpenCV", "NumPy"],
            link: "#",
            icon: "ri-eye-line",
            bgColor: "bg-neo-pink",
            hoverColorClass: "group-hover:text-neo-pink",
            featured: true,
        },
        {
            title: "Number Plate Rec.",
            desc: "Developed a number plate recognition system with a 92% accuracy rate. Streamlined the detection pipeline to enable real-time recognition, reducing latency by 30%.",
            tech: ["Python", "OpenCV"],
            link: "#",
            icon: "ri-car-line",
            bgColor: "bg-neo-orange",
            hoverColorClass: "group-hover:text-neo-orange",
            featured: false,
            className: "mt-0 md:mt-20",
        },
    ];

    return (
        <section
            id="projects"
            className="py-24 bg-neo-yellow border-t-4 border-black px-4 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto overflow-hidden">
                <h2
                    className="text-6xl md:text-9xl font-black mb-16 uppercase tracking-tighter text-white drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-stroke-black"
                >
                    Selected Works
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {projects.map((project, index) => (
                        <Reveal
                            key={index}
                            className={`group bg-white border-4 border-black p-4 shadow-hard ${project.className || ""} relative`}
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute -top-3 -right-3 bg-neo-red text-white font-mono text-xs font-bold px-3 py-1 border-2 border-black shadow-hard-sm z-10 rotate-3">
                                    ★ FEATURED
                                </div>
                            )}

                            {/* CSS-based Project Thumbnail */}
                            <div className={`${project.bgColor} border-2 border-black aspect-video relative overflow-hidden mb-6 flex items-center justify-center group-hover:shadow-none transition-all`}>
                                <i className={`${project.icon} text-8xl text-black/20 group-hover:text-black/40 group-hover:scale-110 transition-all duration-300`}></i>
                                <div className="absolute bottom-2 left-2 font-mono text-xs text-black/40 font-bold">
                                    {String(index + 1).padStart(2, "0")}
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className={`text-4xl font-black uppercase mb-2 transition-colors glitch-hover ${project.hoverColorClass}`}>
                                        {project.title}
                                    </h3>
                                    <p className="font-mono text-sm mb-4 max-w-xs">{project.desc}</p>
                                    <div className="flex gap-2 font-mono text-xs font-bold flex-wrap">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="bg-neo-black text-white px-2 py-1">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <a
                                    href={project.link}
                                    className="w-12 h-12 border-2 border-black bg-neo-green flex items-center justify-center hover:bg-black hover:text-white transition-all cursor-hover shadow-hard-sm shrink-0"
                                >
                                    <i className="ri-arrow-right-up-line text-2xl"></i>
                                </a>
                            </div>
                        </Reveal>
                    ))}
                </div>

                <div className="text-center mt-24">
                    <a
                        href="https://github.com/Tenneti02?tab=repositories"
                        className="inline-block bg-neo-black text-white px-12 py-5 font-bold font-mono text-xl hover:bg-neo-white hover:text-black border-4 border-black transition-all shadow-hard hover:shadow-none cursor-hover"
                    >
                        VIEW ALL REPOS ON GITHUB
                    </a>
                </div>
            </div>
        </section>
    );
}
