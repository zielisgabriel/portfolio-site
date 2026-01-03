"use client";

import Image from "next/image";
import { ProjectsList } from "./project-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SpaceStation from "../../public/space-station.png";

export function ProjectsSection() {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false,
                refetchInterval: false,
                refetchOnMount: false
            }
        }
    });
    
    return (
        <QueryClientProvider client={queryClient}>
            <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 opacity-20">
                    <Image
                        src={SpaceStation}
                        alt="Space Station"
                        className="w-96 animate-item-float"
                        priority
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            Projects
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Some of the projects I've built, applying best practices and modern technologies.
                        </p>
                        <div className="w-20 h-1 bg-foreground mx-auto rounded-full mt-4" />
                    </div>

                    <ProjectsList />
                </div>
            </section>
        </QueryClientProvider>
    );
}