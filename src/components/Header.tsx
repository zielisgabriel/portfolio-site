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
        return `uppercase tracking-widest border-b-2 border-t-2 border-t-transparent opacity-80 hover:opacity-90 ${
            currentSection === id ? "border-b-foreground opacity-100" : "border-b-transparent"
        }`;
    }

    useEffect(() => {
        const home = document.getElementById("home");
        const about = document.getElementById("about");
        const projects = document.getElementById("projects");
        const contact = document.getElementById("contact");

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    setCurrentSection(id);
                }
            }),
            {
                threshold: 0.6,
            }
        });

        if (home) observer.observe(home);
        if (about) observer.observe(about);
        if (projects) observer.observe(projects);
        if (contact) observer.observe(contact);

        return () => observer.disconnect();
    }, [])

    return (
        <header className={`${montserrat.className} fixed w-full`}>
            <nav className="max-w-7xl mx-auto px-2 py-6">
                <ul className="flex gap-6 justify-center items-center">
                    <li>
                        <button
                            className="cursor-pointer"
                            onClick={() => scrollTo("home")}
                        >
                            <p className={navigationButtonStyle("home")}>
                                Home
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-pointer"
                            onClick={() => scrollTo("about")}
                        >
                            <p className={navigationButtonStyle("about")}>
                                About
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-pointer"
                            onClick={() => scrollTo("projects")}
                        >
                            <p className={navigationButtonStyle("projects")}>
                                Projects
                            </p>
                        </button>
                    </li>
                    <li>
                        <button
                            className="cursor-pointer"
                            onClick={() => scrollTo("contact")}
                        >
                            <p className={navigationButtonStyle("contacts")}>
                                Contact
                            </p>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}