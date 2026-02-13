"use client";

import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`transform transition-all duration-600 ease-[cubic-bezier(0.25,1,0.5,1)] ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[40px]"
                } ${className}`}
        >
            {children}
        </div>
    );
}
