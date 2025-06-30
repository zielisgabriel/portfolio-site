import Image from "next/image";
import { Cinzel } from "next/font/google";
import Link from "next/link";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

import Astronaut1 from "../../public/astronaut1.png"

const cinzel = Cinzel({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

export function HomeSection() {
    return (
        <section id="home" className="md:overflow-visible overflow-visible animate-fade-in">
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
    );
}