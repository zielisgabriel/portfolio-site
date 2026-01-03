"use client";

import Image from "next/image";
import Link from "next/link";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import Astronaut1 from "../../public/astronaut1.png";

export function HomeSection() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center animate-fade-in">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="relative text-center space-y-6">
                    <Image
                        src={Astronaut1}
                        alt="Astronaut floating in space"
                        className="absolute hidden md:block -bottom-50 -right-60 z-50 w-80 animate-item-float"
                        priority
                    />

                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        Available for new projects
                    </div>

                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
                        Zielis Gabriel
                    </h1>
                    
                    <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
                        Full-Stack Developer
                    </p>

                    <p className="max-w-xl mx-auto text-muted-foreground leading-relaxed">
                        Building modern and scalable web applications with focus on{" "}
                        <span className="text-foreground font-medium">user experience</span>,{" "}
                        <span className="text-foreground font-medium">performance</span> and{" "}
                        <span className="text-foreground font-medium">clean code</span>.
                    </p>

                    <div className="flex items-center justify-center gap-4 pt-2">
                        <Link
                            href="https://github.com/zielisgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-foreground/30 transition-all cursor-none"
                            aria-label="GitHub"
                        >
                            <GitHubLogoIcon className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/josgabrielalmeida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/50 bg-card/50 hover:bg-card hover:border-foreground/30 transition-all cursor-none"
                            aria-label="LinkedIn"
                        >
                            <LinkedInLogoIcon className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button size="lg" className="cursor-none" asChild>
                            <Link 
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                                }}
                            >
                                View Projects
                                <ArrowDown className="h-4 w-4" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="cursor-none" asChild>
                            <Link 
                                href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                View Resume
                                <ExternalLink className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
        </section>
    );
}