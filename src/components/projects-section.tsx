"use client";

import Image from "next/image";
import { ProjectsList } from "./project-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SpaceStation from "../../public/space-station.png";

type ProjectsSectionProps = {
    dict: any
}

export function ProjectsSection({ dict }: ProjectsSectionProps) {
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
                        loading="eager"
                    />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 space-y-4">
                        <p className="inline-flex px-4 py-1 rounded-full border border-border/60 bg-card/40 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                            Portfolio
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                            {dict.projects.title}
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                            {dict.projects.description}
                        </p>
                        <div className="w-20 h-1 bg-foreground mx-auto rounded-full mt-4" />
                    </div>

                    <ProjectsList />
                </div>
            </section>
        </QueryClientProvider>
    );
}