import Reveal from "./Reveal";

export default function Experience() {
    const experiences = [
        {
            role: "Frontend Web Developer Intern",
            date: "Aug 2025 - PRESENT",
            company: "Baatasari (Startup)",
            bgClass: "bg-neo-yellow",
            textClass: "text-neo-yellow",
            details: [
                "Engineered and deployed responsive web interfaces using Next.js, improving page load performance and mobile usability by 30%",
                "Created reusable UI components and managed application state, reducing frontend bugs and development time by 20%",
                "Collaborated with backend teams to integrate REST APIs and ensured smooth production releases using modern CI/CD workflows",
            ],
        },
        {
            role: "AI/ML Intern",
            date: "May 2025 - June 2025",
            company: "EduSkills – Google AI/ML Virtual Internship",
            bgClass: "bg-neo-red",
            textClass: "text-neo-red",
            details: [
                "Devised a computer vision pipeline using Google Vision API, TensorFlow, and Hugging Face Transformers to generate image captions, classify images, and perform object detection",
                "Introduced product search and image similarity comparison, improving relevance of matched products for user-uploaded images by 25%",
                "Optimized preprocessing and model inference for large image datasets, reducing latency by 20% while maintaining model performance",
            ],
        },
        {
            role: "Full-Stack Web Developer Intern",
            date: "Sep 2024 - Dec 2024",
            company: "Infosys Spring-Board",
            bgClass: "bg-neo-blue",
            textClass: "text-neo-blue",
            details: [
                "Redesigned and deployed a responsive inventory management system, improving operational efficiency by 35%",
                "Integrated real-time data visualization, enhancing inventory accuracy and user experience by 40%",
                "Improved application responsiveness and accessibility, increasing user engagement by 30%",
                "Ensured cross-browser compatibility using HTML, CSS, JavaScript, React, MongoDB, Agile, and Git",
            ],
        },
    ];

    return (
        <section id="experience" className="py-24 px-4 max-w-7xl mx-auto overflow-hidden">
            <h2 className="text-5xl md:text-8xl font-black uppercase mb-12 tracking-tighter text-center">
                Experience<span className="text-neo-red">_Log</span>
            </h2>

            <div className="flex justify-center">
                <div className="w-full max-w-4xl">
                    <div className="relative border-l-4 border-black ml-4 md:ml-10 space-y-12 pr-6">
                        {experiences.map((exp, index) => (
                            <Reveal key={index} className="relative pl-8 md:pl-16">
                                <div
                                    className={`absolute -left-[14px] top-6 w-6 h-6 border-4 border-black ${exp.bgClass} z-10`}
                                ></div>
                                <div className="bg-white border-4 border-black shadow-hard hover:shadow-hard-xl transition-all p-6">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                                        <h3 className="text-3xl font-black uppercase text-wrap wrap-break-word">{exp.role}</h3>
                                        <span className="font-mono font-bold bg-neo-black text-white px-2 py-1 text-sm md:text-base mt-2 md:mt-0">
                                            {exp.date}
                                        </span>
                                    </div>
                                    <p
                                        className={`font-mono text-xl mb-2 font-bold ${exp.textClass}`}
                                    >
                                        @ {exp.company}
                                    </p>
                                    <ul className="list-disc list-inside font-mono text-gray-700 space-y-1">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
