"use client"

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRightIcon, HouseIcon, MenuIcon, PaperclipIcon, PresentationIcon, UserSearch } from "lucide-react";
import Link from "next/link";
import { scrollToById } from "@/utils/scroll-to-by-id";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
import clsx from "clsx";
import { Separator } from "./ui/separator";

const navItems = [
    { id: "home", label: "Home", icon: <HouseIcon /> },
    { id: "about", label: "About", icon: <UserSearch /> },
    { id: "projects", label: "Projects", icon: <PresentationIcon /> },
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

                    <div className="md:hidden">
                        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button
                                    variant={"ghost"}
                                    size={"icon"}
                                    className="cursor-none"
                                >
                                    <MenuIcon className="h-5 w-5" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent className="z-100 w-72">
                                <SheetHeader className="pb-2">
                                    <SheetTitle className="text-2xl font-bold">
                                        Zielis<span className="text-primary">.</span>
                                    </SheetTitle>
                                </SheetHeader>

                                <Separator />

                                <nav className="flex flex-col gap-2 px-2">
                                    {navItems.map(item => (
                                        <SheetClose asChild key={item.id}>
                                            <Button
                                                onClick={() => scrollTo(item.id)}
                                                variant={currentSection === item.id ? "secondary" : "ghost"}
                                                className="w-full justify-between gap-3 h-12 text-base cursor-none"
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={clsx(
                                                        "p-2 rounded-lg",
                                                        currentSection === item.id 
                                                            ? "bg-primary/20 text-primary" 
                                                            : "bg-muted"
                                                    )}>
                                                        {item.icon}
                                                    </span>
                                                    <p>{item.label}</p>
                                                </div>
                                                <div className="w-20">
                                                    {currentSection === item.id && (
                                                        <ChevronRightIcon className="ml-auto h-4 w-4 text-primary" />
                                                    )}
                                                </div>
                                            </Button>
                                        </SheetClose>
                                    ))}
                                </nav>

                                <Separator />

                                <div className="px-4">
                                    <SheetClose asChild>
                                        <Button
                                            asChild
                                            variant={"outline"}
                                            className="w-full cursor-none"
                                        >
                                            <Link 
                                                href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <PaperclipIcon className="h-4 w-4" />
                                                View Resume
                                            </Link>
                                        </Button>
                                    </SheetClose>
                                </div>

                                <SheetFooter className="border-t border-border pt-4">
                                    <p className="text-xs text-muted-foreground text-center">
                                        Full-Stack Developer
                                    </p>
                                    <Button
                                        asChild
                                        variant={"outline"}
                                        size={"sm"}
                                        className="cursor-none"
                                    >
                                        <Link 
                                            href={"https://www.youtube.com/@LilZielis"}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            🎵 My music channel
                                        </Link>
                                    </Button>
                                </SheetFooter>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </header>
    );
}