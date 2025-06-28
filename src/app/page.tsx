import { Cinzel } from "next/font/google";
import { Metadata } from "next";
import { ParticlesBackground } from "@/components/ParticlesBackground";
import Image from "next/image";

import Astronaut1 from "../../public/astronaut1.png"

import SpaceStation from "../../public/space-station.png"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { LastImageNasaApod } from "@/components/LastImageNasaApod";
import { ProjectsList } from "@/components/ProjectsList";

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

      <section id="home" className="md:overflow-visible overflow-visible">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-7xl mx-auto">
          <div className="relative text-center">
            <Image
              src={Astronaut1}
              alt="Astronaut"
              className="absolute md:-bottom-135 md:-right-100 animate-item-float sm:-bottom-130 -bottom-105 -right-2 z-50"
              priority
            />
            
            <h1 className={`${cinzel.className} md:text-7xl sm:text-5xl text-4xl`}>
              Zielis Gabriel
            </h1>

            <h2 className={`${cinzel.className} md:text-2xl text-xl`}>
              Full-stack developer
            </h2>
          </div>

          <ul className="flex gap-4 mt-2 md:mb-0 mb-60">
            <li>
              <Link
                href="https://github.com/zielisgabriel"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <GitHubLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/josgabrielalmeida/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <LinkedInLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/zielis085/"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer hover:opacity-80"
              >
                <InstagramLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="about" className="py-12 px-4">
        <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 justify-center max-w-7xl mx-auto">
          <div className="flex flex-col gap-6">
            <div className="bg-primary p-4 rounded-xl border border-border-color">
              <h2 className={`${cinzel.className} text-4xl`}>
                About me
              </h2>

              <div className="flex flex-col gap-4">
                <p className="text-md leading-loose opacity-90 tracking-wide">
                  Hello, my name is José Gabriel, but you can call me Zielis. I am a programming student currently pursuing a degree in Systems Analysis and Development. As full-stack developer, I have hands-on experience building personal projects with technologies such as Next.js and the Spring Framework, where I apply SOLID and Domain-Driven Design (DDD) principles to deliver maintainable and scalable code.
                </p>

                <p className="text-md leading-loose opacity-90 tracking-wide">
                  In addition to backend and frontend development, I have skills in deploying applications to cloud environments using AWS, as well as implementing continuous integration and continuous deployment (CI/CD) pipelines to automate workflows and ensure high-quality delivery. I also work with containerization tools like Docker to manage infrastructure more efficiently.
                </p>
              </div>
            </div>

            <div className="bg-primary p-4 rounded-xl border border-border-color">
              <h2 className={`${cinzel.className} text-4xl`}>
                Skills
              </h2>

              <div className="gri d grid-cols-2 gap-x-1 gap-y-4">
                <div>
                  <h3 className={`${cinzel.className} text-xl`}>
                    Langs
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        Java
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        TypeScript
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={`${cinzel.className} text-xl`}>
                    Back-end
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        Spring Framework
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        Express.js
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={`${cinzel.className} text-xl`}>
                    Front-end
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        Next.js
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        React.js
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        TailwindCSS
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={`${cinzel.className} text-xl`}>
                    Databases
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        MySQL
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        PostgreSQL
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        SQLite
                      </p>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className={`${cinzel.className} text-xl`}>
                    Infrastructure
                  </h3>

                  <ul className="flex flex-wrap gap-2">
                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        AWS
                      </p>
                    </li>

                    <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground">
                      <p className="text-sm text-background font-medium">
                        Docker
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex max-w-xl justify-center items-center animate-item-float">
            <Image
              src={SpaceStation}
              alt="Space Station"
              className="w-full rotate-2 md:block hidden"
              priority
            />
          </div>
        </div>
      </section>

      <section>
        <LastImageNasaApod />
      </section>

      <section
        id="projects"
        className="flex flex-col relative md:py-12 py-8 pb-0 px-4 md:gap-8 gap-4 overflow-hidden"
      >

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
    </main>
  );
}