import { ParticlesBackground } from "@/components/ParticlesBackground";
import { ProjectsList } from "@/components/ProjectsList";
import { SearchInput } from "@/components/SearchInput";
import { Metadata } from "next";
import { DM_Serif_Display } from "next/font/google";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-dm-serif-display-serif",
})

export const metadata: Metadata = {
    title: "Projetos | Portfólio"
}

export default function Projects() {
    return (
        <main className="min-h-screen px-4">
            <ParticlesBackground />

            <div className="flex flex-col max-w-7xl m-auto py-12 pt-40 gap-10">
                <div className="flex justify-between">
                    <h1 className={`${dmSerifDisplay.className} text-5xl`}>
                        Projetos:
                    </h1>

                    <SearchInput />
                </div>
                
                <ProjectsList />
            </div>
        </main>
    );
}