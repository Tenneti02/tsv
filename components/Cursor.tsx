"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
    const cursorRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const moveCursor = (e: MouseEvent) => {
            cursor.style.left = e.clientX + "px";
            cursor.style.top = e.clientY + "px";
            // We use transform in CSS, but here we set position. 
            // The CSS has transform: translate(-50%, -50%) to center it.
        };

        const hoverElements = document.querySelectorAll<HTMLElement>(".cursor-hover, a, button, input, textarea");

        const onMouseEnter = () => {
            cursor.style.width = "60px";
            cursor.style.height = "60px";
            cursor.style.backgroundColor = "#FBFF48"; // Neo Yellow
            cursor.style.mixBlendMode = "normal";
            cursor.style.border = "2px solid black";
        };

        const onMouseLeave = () => {
            cursor.style.width = "24px";
            cursor.style.height = "24px";
            cursor.style.backgroundColor = "#fff";
            cursor.style.mixBlendMode = "difference";
            cursor.style.border = "none";
        };

        window.addEventListener("mousemove", moveCursor);

        hoverElements.forEach((el) => {
            el.addEventListener("mouseenter", onMouseEnter);
            el.addEventListener("mouseleave", onMouseLeave);
        });

        // Handle dynamic elements (optional, if using MutationObserver, but simple approach for now)
        // For a React app, it's better to use a context or just reliance on global styles/classes, 
        // but the original used vanilla JS listeners. 
        // Effect cleanup is important.

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            hoverElements.forEach((el) => {
                el.removeEventListener("mouseenter", onMouseEnter);
                el.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []); // Run once on mount. limitation: won't attach to new elements.

    // Better approach for React: Event delegation or just a simple hook, 
    // but to keep it simple and close to original:
    // We can add a global mouseover listener to delegate.

    useEffect(() => {
        const cursor = cursorRef.current;
        if (!cursor) return;

        const onMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('.cursor-hover, a, button, input, textarea') || target.closest('a, button, input, textarea, .cursor-hover')) {
                cursor.style.width = "60px";
                cursor.style.height = "60px";
                cursor.style.backgroundColor = "#FBFF48";
                cursor.style.mixBlendMode = "normal";
                cursor.style.border = "2px solid black";
            } else {
                cursor.style.width = "24px";
                cursor.style.height = "24px";
                cursor.style.backgroundColor = "#fff";
                cursor.style.mixBlendMode = "difference";
                cursor.style.border = "none";
            }
        };

        document.addEventListener('mouseover', onMouseOver);
        return () => document.removeEventListener('mouseover', onMouseOver);
    }, []);

    return (
        <div
            id="cursor"
            ref={cursorRef}
            className="w-6 h-6 bg-white rounded-full border-2 border-black hidden lg:block pointer-events-none fixed z-[9999] mix-blend-difference"
            style={{ transform: "translate(-50%, -50%)" }}
        />
    );
}
