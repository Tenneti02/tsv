import Reveal from "./Reveal";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="py-24 px-4 max-w-7xl mx-auto border-x-4 border-black bg-white my-12 shadow-hard overflow-hidden"
        >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                <div className="md:col-span-4">
                    <Reveal>
                        <div className="aspect-square bg-gray-200 border-4 border-black relative shadow-hard overflow-hidden group">
                            <Image
                                src="/Assets/images/image.png"
                                alt="venkat"
                                fill
                                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                            <span className="absolute top-2 left-2 bg-neo-red text-white px-2 font-mono text-xs border border-black z-10">
                                AVATAR.JPG
                            </span>
                        </div>
                    </Reveal>
                </div>
                <div className="md:col-span-8 flex flex-col justify-center">
                    <Reveal>
                        <h2 className="text-6xl font-black uppercase mb-6">Who am I?</h2>
                        <p className="font-mono text-xl leading-relaxed mb-6">
                            I am T S V Subrahmanyam. A passionate developer pursuing B.Tech Computer Science at GITAM. I focus on{" "}
                            <span className="bg-neo-yellow px-1 border border-black">
                                solving real-world problems
                            </span>{" "}
                            through code.
                        </p>
                        <div className="font-mono text-lg mb-8 text-gray-600 border-l-4 border-neo-purple pl-4 space-y-4">
                            <div>
                                <h3 className="font-bold text-black">EDUCATION</h3>
                                <p className="text-sm">
                                    &gt; Gandhi Institute of Technology and Management<br />
                                    B.Tech Computer Science (Oct 2022 - Present)
                                </p>
                                <p className="text-sm mt-2">
                                    &gt; Ascent Jr College<br />
                                    Intermediate (May 2020 - Sep 2022)
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-black">COURSEWORK</h3>
                                <p className="text-sm">
                                    Software Engineering • DSA • Database Systems • Web Development • OOP • Computer Networks
                                </p>
                            </div>
                            <div>
                                <h3 className="font-bold text-black">EXTRACURRICULAR</h3>
                                <p className="text-sm">
                                    &gt; Smart India Hackathon (SIH) Participant (Sep 2023)<br />
                                    Streamlined an innovative chatbot for museum ticketing. Implemented scalable AI-driven features.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 flex-wrap">
                            <div className="bg-neo-black text-white px-4 py-2 font-mono text-sm border-2 border-transparent">
                                📍 VISAKHAPATNAM, AP
                            </div>
                            <div className="bg-neo-green text-black px-4 py-2 font-mono text-sm border-2 border-black">
                                🟢 STATUS: AVAILABLE
                            </div>
                            <div className="bg-neo-blue text-white px-4 py-2 font-mono text-sm border-2 border-black">
                                📧 tennetisubrahmanyam02@gmail.com
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
