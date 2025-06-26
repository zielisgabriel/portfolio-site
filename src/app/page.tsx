import { Cinzel } from "next/font/google";
import { Metadata } from "next";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Image from "next/image";

import Astronaut from "../../public/astronaut.png"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";

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
    <main>
      <ParticlesBackground />

      <section className="overflow-hidden" id="home">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto">
          <div className="relative text-center">
            <Image
              src={Astronaut}
              alt="Astronaut"
              className="absolute w-xl animate-item-float -right-100 -bottom-150"
            />
            
            <h1 className={`${cinzel.className} text-7xl`}>
              Zielis Gabriel
            </h1>

            <h2 className={`${cinzel.className} text-2xl`}>
              Full-stack developer
            </h2>
          </div>

          <ul className="flex gap-4 mt-2">
            <li>
              <Link
                href="https://github.com/zielisgabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <GitHubLogoIcon className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/josgabrielalmeida/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <LinkedInLogoIcon className="w-8 h-8" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/zielis085/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <InstagramLogoIcon className="w-8 h-8" />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}