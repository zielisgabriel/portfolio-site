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
            <div className="flex flex-col items-center justify-center h-screen max-h-screen min-h-[34rem] max-w-7xl mx-auto">
                <div className="relative text-center">
                    <Image
                        src={Astronaut1}
                        alt="Astronaut"
                        className="absolute md:-bottom-135 md:-right-100 sm:-bottom-145 -bottom-120 -right-2 z-50 animate-item-float"
                        priority
                    />
                    
                    <h1 className={`${cinzel.className} md:text-7xl sm:text-5xl text-4xl`}>
                        Zielis Gabriel
                    </h1>

                    <h2 className={`${cinzel.className} md:text-2xl text-xl`}>
                        Full-stack developer
                    </h2>
                </div>

                <ul className="flex gap-4 mt-2">
                    <li>
                        <Link
                            href="https://github.com/zielisgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:cursor-none opacity-80"
                        >
                            <GitHubLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.linkedin.com/in/josgabrielalmeida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:cursor-none opacity-80"
                        >
                            <LinkedInLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="https://www.instagram.com/zielis085/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" hover:cursor-none opacity-80"
                        >
                            <InstagramLogoIcon className="md:w-8 md:h-8 w-6 h-6" />
                        </Link>
                    </li>
                </ul>

                <Link
                    href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                    title="Curriculum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 md:mb-0 mb-60"
                >
                    <button className="bg-foreground text-background py-2 px-4 sm:text-xl text-md font-bold rounded-full  hover:cursor-none bg-foreground/10 hover:cursor-none text-foreground">
                        <p>
                            View Curriculum
                        </p>
                    </button>
                </Link>
            </div>
        </section>
    );
}