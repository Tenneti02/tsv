import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Skills() {
    const skills = [
        { label: "LANGUAGE", name: "Python", color: "hover:bg-neo-blue" },
        { label: "LANGUAGE", name: "Java", color: "hover:bg-neo-orange" },
        { label: "LANGUAGE", name: "C", color: "hover:bg-neo-purple" },
        { label: "LANGUAGE", name: "C++", color: "hover:bg-neo-pink" },
        { label: "WEB", name: "Angular", color: "hover:bg-neo-red" },
        { label: "WEB", name: "React", color: "hover:bg-neo-blue" },
        { label: "WEB", name: "Bootstrap", color: "hover:bg-neo-purple" },
        { label: "CORE", name: "HTML", color: "hover:bg-neo-orange" },
        { label: "CORE", name: "CSS", color: "hover:bg-neo-pink" },
        { label: "CORE", name: "JavaScript", color: "hover:bg-neo-yellow" },
        { label: "AI/ML", name: "OpenCV", color: "hover:bg-neo-green" },
        { label: "AI/ML", name: "NLP", color: "hover:bg-neo-blue" },
        { label: "DATA", name: "Data Analysis", color: "hover:bg-neo-purple" },
        { label: "MGMT", name: "Agile Scrum", color: "hover:bg-neo-orange" },
        { label: "TOOLS", name: "Git", color: "hover:bg-white" },
        { label: "SOFT", name: "Team Work", color: "hover:bg-neo-green" },
    ];

    return (
        <section id="skills" className="py-20 bg-neo-black text-neo-white border-y-4 border-black relative overflow-hidden">
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                    backgroundSize: "40px 40px"
                }}>
            </div>

            <div className="max-w-[1400px] mx-auto px-4 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-4 border-white pb-4">
                    <h2 className="text-6xl md:text-8xl font-black uppercase text-white tracking-tighter">
                        TECH<span className="text-neo-green">_STACK</span>
                    </h2>
                    <div className="flex items-center gap-2 mb-2 md:mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                        <Badge variant="outline" className="font-mono text-neo-green border-neo-green rounded-none">{"/// SYSTEM_OPTIMIZED"}</Badge>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center md:justify-start">
                    {skills.map((skill, index) => (
                        <Card
                            key={index}
                            className={`group w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-[12.5%] h-24 border-r-2 border-b-2 border-white/20 bg-neo-black ${skill.color} transition-all duration-0 hover:z-10 relative cursor-hover rounded-none border-t-0 border-l-0 shadow-none ring-0`}
                        >
                            <CardContent className="flex flex-col items-center justify-center h-full p-2">
                                <div className="text-neo-green group-hover:text-black font-mono text-xs mb-1 opacity-50">&gt;_ {skill.label}</div>
                                <div className="text-white group-hover:text-black font-black font-display text-xl uppercase">{skill.name}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="border-t-4 border-white mt-8 pt-4 flex justify-between font-mono text-xs text-gray-500">
                    <span>TOTAL_NODES: {skills.length}</span>
                    <span>MEMORY_USAGE: 128MB</span>
                </div>
            </div>
        </section>
    );
}
