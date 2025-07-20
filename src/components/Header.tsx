"use client"

import { Montserrat } from "next/font/google";
import { useEffect, useState } from "react";

const montserrat = Montserrat({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
})

export function Header() {
    const [currentSection, setCurrentSection] = useState<string>("home");

    function scrollTo(id: string) {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    }

    function navigationButtonStyle (id: string) {
        return `uppercase tracking-widest border-b-2 border-t-2 border-t-transparent opacity-80 ${
            currentSection === id ? "border-b-foreground opacity-100" : "border-b-transparent"
        }`;
    }

    useEffect(() => {
        const sections = [
            document.getElementById("home"),
            document.getElementById("about"),
            document.getElementById("projects"),
            // document.getElementById("contact"),
        ];

        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length > 0) {
                const mostVisible = visibleEntries[0];
                setCurrentSection(mostVisible.target.id);
            }
        }, {
            threshold: 0.2,
        });

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [])

    return (
        <header className={`${montserrat.className} fixed z-100 w-full bg-gradient-to-t from-transparent to-background`}>
            <nav className="max-w-7xl mx-auto px-2 py-6">
                <ul className="flex gap-6 justify-center items-center">
                    <li>
                        <button
                            className="cursor-none"
                            onClick={() => scrollTo("home")}
                        >
                            <p className={navigationButtonStyle("home")}>
                                Home
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-none"
                            onClick={() => scrollTo("about")}
                        >
                            <p className={navigationButtonStyle("about")}>
                                About
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-none"
                            onClick={() => scrollTo("projects")}
                        >
                            <p className={navigationButtonStyle("projects")}>
                                Projects
                            </p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}