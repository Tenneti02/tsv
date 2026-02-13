"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section id="contact" className="py-24 px-4 max-w-5xl mx-auto overflow-hidden">
            <Reveal className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative mt-12">
                <div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard rotate-[-5deg]">
                    <span className="font-black text-2xl">START A PROJECT</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
                            Let&apos;s
                            <br />
                            Talk
                            <br />
                            Code.
                        </h2>
                        <p className="font-mono text-lg mb-8 text-gray-600">
                            I am currently available for freelance work and open to full-time
                            opportunities.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                    <i className="ri-mail-line text-xl"></i>
                                </div>
                                <a
                                    href="mailto:tennetisubrahmanyam02@gmail.com"
                                    className="text-xl font-bold hover:bg-neo-blue cursor-hover"
                                >
                                    tennetisubrahmanyam02@gmail.com
                                </a>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
                                    <i className="ri-map-pin-line text-xl"></i>
                                </div>
                                <span className="text-xl font-bold">Visakhapatnam / Remote</span>
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 border-2 border-black">
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">
                                Identity
                            </label>
                            <Input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="NAME / COMPANY"
                                required
                                className="bg-white border-2 border-black p-3 font-bold focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:shadow-hard-sm transition-all cursor-hover rounded-none h-auto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">
                                Coordinates
                            </label>
                            <Input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="EMAIL ADDRESS"
                                required
                                className="bg-white border-2 border-black p-3 font-bold focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:shadow-hard-sm transition-all cursor-hover rounded-none h-auto"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label className="font-mono font-bold mb-1 uppercase text-xs">
                                Transmission
                            </label>
                            <Textarea
                                rows={4}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="PROJECT DETAILS..."
                                required
                                className="bg-white border-2 border-black p-3 font-bold focus-visible:ring-0 focus-visible:bg-neo-yellow focus-visible:shadow-hard-sm transition-all resize-none cursor-hover rounded-none"
                            />
                        </div>
                        <Button
                            type="submit"
                            disabled={status === "submitting"}
                            className="w-full bg-neo-blue text-white font-black text-xl py-8 border-2 border-black shadow-hard hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all cursor-hover rounded-none disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "submitting" ? "TRANSMITTING..." : "TRANSMIT DATA"}
                        </Button>

                        {status === "success" && (
                            <div className="bg-neo-green border-2 border-black p-4 text-center font-bold">
                                MESSAGE  DELIVERED. OVER.
                            </div>
                        )}
                        {status === "error" && (
                            <div className="bg-neo-red text-white border-2 border-black p-4 text-center font-bold">
                                TRANSMISSION FAILED. RETRY.
                            </div>
                        )}
                    </form>
                </div>
            </Reveal>
        </section>
    );
}
