import { Metadata } from "next";
import { ParticlesBackground } from "@/components/particles-background";

import { LastImageNasaApod } from "@/components/last-image-nasa-apod";
import { HomeSection } from "@/components/home-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";

export const metadata: Metadata = {
  title: "Zielis Gabriel | Portfólio",
  description: "Meu portfólio de Desenvolvedor Web profissional."
}

export default async function Home() {
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