"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Menu, PaperclipIcon, X } from "lucide-react";
import Link from "next/link";
import { scrollToById } from "@/utils/scroll-to-by-id";

const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
];

export function Header() {
    const [currentSection, setCurrentSection] = useState<string>("home");
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

    function scrollTo(id: string) {
        scrollToById(id, () => setIsMobileMenuOpen(false));
    }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    useEffect(() => {
        const sections = navItems.map(item => document.getElementById(item.id));

        const observer = new IntersectionObserver((entries) => {
            const visibleEntries = entries
                .filter(entry => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

            if (visibleEntries.length > 0) {
                const mostVisible = visibleEntries[0];
                setCurrentSection(mostVisible.target.id);
            }
        }, {
            threshold: 0.3,
        });

        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <header 
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
                isScrolled 
                    ? "bg-background/80 backdrop-blur-md border-b border-border/50" 
                    : "bg-gradient-to-b from-background/80 to-transparent"
            }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Button
                        variant={"ghost"}
                        onClick={() => { scrollTo("home"); }}
                        className="font-bold text-xl tracking-tight hover:text-primary transition-colors cursor-none"
                    >
                        Zielis.
                    </Button>

                    <ul className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => scrollTo(item.id)}
                                    className={`cursor-none font-medium uppercase tracking-widest text-xs transition-colors ${
                                        currentSection === item.id 
                                            ? "text-foreground border-b-2 border-foreground rounded-b-none" 
                                            : "text-muted-foreground hover:text-foreground"
                                    }`}
                                >
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                        <li className="ml-4">
                            <Button
                                size="sm"
                                variant={"outline"}
                                className="cursor-none"
                                asChild
                            >
                                <Link 
                                    href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PaperclipIcon />
                                    Resume
                                </Link>
                            </Button>
                        </li>
                    </ul>

                    <Button
                        variant="ghost"
                        size="icon"
                        className="md:hidden cursor-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-md animate-fade-in">
                        <ul className="flex flex-col gap-2">
                            {navItems.map((item) => (
                                <li key={item.id}>
                                    <Button
                                        variant="ghost"
                                        className={`cursor-none w-full justify-start font-medium uppercase tracking-widest text-xs ${
                                            currentSection === item.id 
                                                ? "text-foreground" 
                                                : "text-muted-foreground"
                                        }`}
                                        onClick={() => scrollTo(item.id)}
                                    >
                                        {item.label}
                                    </Button>
                                </li>
                            ))}
                            <li className="mt-2">
                                <Button className="w-full cursor-none" asChild>
                                    <Link 
                                        href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Resume
                                    </Link>
                                </Button>
                            </li>
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
}