"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { GlobeIcon, HouseIcon, PaperclipIcon, PresentationIcon, UserSearch } from "lucide-react";
import Link from "next/link";
import { scrollToById } from "@/utils/scroll-to-by-id";
import { MobileHeader } from "./mobile-header";

type HeaderProps = {
    dict: any;
    locale: string;
}

export function Header({ dict, locale }: HeaderProps) {
    const [currentSection, setCurrentSection] = useState<string>("home");
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        { id: "home", label: dict.header.home, icon: <HouseIcon /> },
        { id: "about", label: dict.header.about, icon: <UserSearch /> },
        { id: "projects", label: dict.header.projects, icon: <PresentationIcon /> },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
            className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${isScrolled
                ? "bg-background/75 backdrop-blur-xl border-b border-border/50 shadow-sm"
                : "bg-gradient-to-b from-background/90 via-background/40 to-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <Button
                        variant={"ghost"}
                        onClick={() => { scrollToById("home"); }}
                        className="font-bold text-xl tracking-tight hover:text-primary transition-colors"
                    >
                        Zielis.
                    </Button>

                    <ul className="hidden md:flex items-center gap-1 rounded-full border border-border/60 bg-card/50 backdrop-blur-md p-1.5">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => scrollToById(item.id)}
                                    className={` font-medium uppercase tracking-widest text-xs transition-all rounded-full px-4 ${currentSection === item.id
                                        ? "text-foreground bg-foreground/10"
                                        : "text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                        }`}
                                >
                                    {item.label}
                                </Button>
                            </li>
                        ))}
                        <li className="ml-2">
                            <Button
                                size="sm"
                                variant="ghost"
                                className=" gap-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-foreground/5"
                                asChild
                            >
                                <Link href={locale === "pt" ? "/en" : "/pt"}>
                                    <GlobeIcon className="h-4 w-4" />
                                    <span className="font-medium text-xs uppercase tracking-wider">
                                        {locale === "pt" ? "EN" : "PT"}
                                    </span>
                                </Link>
                            </Button>
                        </li>
                        <li className="ml-2">
                            <Button
                                size="sm"
                                variant={"outline"}
                                className=" rounded-full"
                                asChild
                            >
                                <Link
                                    href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <PaperclipIcon />
                                    {dict.header.resume}
                                </Link>
                            </Button>
                        </li>
                    </ul>

                    <MobileHeader
                        currentSection={currentSection}
                        dict={dict}
                        navItems={navItems}
                        currentLocale={locale}
                    />
                </div>
            </nav>
        </header>
    );
}