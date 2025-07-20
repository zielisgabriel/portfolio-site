"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHover, setIsHover] = useState(false);
    
    useEffect(() => {
        function move(e: MouseEvent) {
            if (cursorRef.current) {
                const size = isHover ? 32 : 16;
                cursorRef.current.style.left = `${e.clientX - size / 2}px`;
                cursorRef.current.style.top = `${e.clientY - size / 2}px`;
            }
        }
    
        function handleMoveMouse(e: MouseEvent) {
            const target = e.target as HTMLElement;
            setIsHover(!!target.closest("a, button, .hover-target"));
        }

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMoveMouse);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleMoveMouse);
        }
    }, [isHover]);

    return (
        <div
            ref={cursorRef}
            className={twMerge(clsx(
                "fixed z-200 pointer-events-none rounded-full bg-white",
                isHover ? "w-8 h-8 bg-transparent border-2" : "w-4 h-4"
            ))}
            style={{
                position: "fixed",
                transform: "translate3d(0, 0, 0)",
            }}
        />
    );
}