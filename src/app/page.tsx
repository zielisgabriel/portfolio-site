import { Cinzel } from "next/font/google";
import { Metadata } from "next";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Image from "next/image";

import SpaceStation from "../../public/space-station.png"
import { LastImageNasaApod } from "@/components/LastImageNasaApod";
import { ProjectsList } from "@/components/ProjectsList";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Zielis Gabriel | Portfólio",
  description: "Meu portfólio de Desenvolvedor Web profissional."
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <ParticlesBackground />

      <HomeSection />
      <AboutSection />

      <section>
        <LastImageNasaApod />
      </section>

      <ProjectsSection />
    </main>
  );
}