"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const [isHover, setIsHover] = useState(false);
    const [isOffScreen, setIsOffScreen] = useState(true);
    const [isMouseDevice, setIsMouseDevice] = useState(true);

    useEffect(() => {
        const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
        setIsMouseDevice(hasFinePointer);

        if (!hasFinePointer) return;

        function move(e: MouseEvent) {
            if (cursorRef.current) {
                const size = isHover ? 32 : 16;
                cursorRef.current.style.left = `${e.clientX - size / 2}px`;
                cursorRef.current.style.top = `${e.clientY - size / 2}px`;
            }
        }

        function handleMoveMouse(e: MouseEvent) {
            const target = e.target as HTMLElement;
            setIsHover(!!target.closest("a, button, .hover-target, label, input"));
        }

        function handleMouseLeave(e: MouseEvent) {
            if (!e.relatedTarget) {
                setIsOffScreen(true);
            }
        }

        function handleMouseEnter() {
            setIsOffScreen(false);
        }

        window.addEventListener("mousemove", move);
        window.addEventListener("mouseover", handleMoveMouse);
        document.addEventListener("mouseout", handleMouseLeave);
        document.addEventListener("mouseover", handleMouseEnter);

        return () => {
            window.removeEventListener("mousemove", move);
            window.removeEventListener("mouseover", handleMoveMouse);
            document.removeEventListener("mouseout", handleMouseLeave);
            document.removeEventListener("mouseover", handleMouseEnter);
        };
    }, [isHover]);

    if (!isMouseDevice) return null;

    return (
        <div
            ref={cursorRef}
            className={twMerge(clsx(
                "fixed z-200 pointer-events-none rounded-full bg-white transition-[width,height,background-color,border] duration-100 ease-in",
                isHover ? "w-8 h-8 bg-white/0 border-2" : "w-4 h-4",
                isOffScreen && "hidden"
            ))}
            style={{
                position: "fixed",
                transform: "translate3d(0, 0, 0)",
            }}
        />
    );
}