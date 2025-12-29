"use client";

import Image from "next/image";
import { Cinzel } from "next/font/google";
import SpaceStation from "../../public/space-station.png";
import { ProjectsList } from "./project-list";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const cinzel = Cinzel({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

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
            <section id="projects" className="flex flex-col relative md:py-12 py-8 pb-0 px-4 md:gap-8 gap-4 overflow-hidden">
                <div className="absolute top-[60%] left-1/2 -z-10 brightness-90 animate-from-left-screen-to-right-screen -rotate-10">
                <Image
                    src={SpaceStation}
                    alt="Space Station"
                    className="rotate-6 w-sm"
                    priority
                />
                </div>

                <h1 className={`${cinzel.className} md:text-5xl text-4xl text-center`}>
                    Projects
                </h1>

                <ProjectsList />
            </section>
        </QueryClientProvider>
    );
}