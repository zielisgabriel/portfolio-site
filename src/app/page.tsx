import { Cinzel } from "next/font/google";
import { Metadata } from "next";
import { ParticlesBackground } from "@/components/ParticlesBackground";

import { LastImageNasaApod } from "@/components/LastImageNasaApod";
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