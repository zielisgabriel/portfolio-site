import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowDown, ExternalLink } from "lucide-react";
import Astronaut1 from "../../public/astronaut1.png";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Geist } from "next/font/google";
import { ScrollToProjectsSectionButton } from "./scroll-to-projects-section-button";
import { AuroraText } from "./ui/aurora-text";

type HomeSectionProps = {
    dict: any
}

const geist = Geist({
    weight: ["400", "500", "600", "700", "800", "900"],
});

export function HomeSection({ dict }: HomeSectionProps) {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center animate-fade-in pt-16">
            <div className="lg:grid lg:grid-cols-2 flex items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 gap-10">
                <div className="space-y-7 text-center lg:text-start lg:block">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 bg-card/50 backdrop-blur-sm text-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                        </span>
                        {dict.home.available}
                    </div>

                    <h1 className={`${geist.className} flex lg:flex-col flex-row gap-2 justify-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tight`}>
                        Zielis
                        <AuroraText
                            colors={["#ffffff", "#bfbfbf"]}
                        >
                            Gabriel
                        </AuroraText>
                    </h1>

                    <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                        {dict.all.stack}
                    </p>

                    <p className="max-w-xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed text-pretty">
                        {dict.home.description[0] + " "}
                        <span className="text-foreground font-medium">{dict.home.description[1]}</span>,{" "}
                        <span className="text-foreground font-medium">{dict.home.description[2]}</span> {dict.home.description[3] + " "}
                        <span className="text-foreground font-medium">{dict.home.description[4]}</span>.
                    </p>

                    <div className="flex lg:justify-start justify-center gap-3 pt-1">
                        <Link
                            href="https://github.com/zielisgabriel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/60 bg-card/60 hover:bg-card hover:border-foreground/30 transition-all"
                            aria-label="GitHub"
                        >
                            <FaGithub className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/josgabrielalmeida/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/60 bg-card/60 hover:bg-card hover:border-foreground/30 transition-all"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin className="h-5 w-5" />
                        </Link>
                        <Link
                            href="https://www.instagram.com/zielis085/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full border border-border/60 bg-card/60 hover:bg-card hover:border-foreground/30 transition-all"
                            aria-label="Instagram"
                        >
                            <FaInstagram className="h-5 w-5" />
                        </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row lg:justify-start justify-center gap-2.5 pt-1">
                        <ScrollToProjectsSectionButton dict={dict} />
                        <Button variant="outline" size="lg" className=" bg-card/50" asChild>
                            <Link
                                href="https://docs.google.com/document/d/1yMuvbtr0Nx3zqZJLSM_-SZwGLFiD2XCai85EcAqrv9M/edit?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {dict.all.view_resume}
                                <ExternalLink className="h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>

                <Image
                    src={Astronaut1}
                    alt="Astronaut floating in space"
                    className="hidden lg:block animate-item-float translate-x-16 translate-y-10 max-w-[520px] h-auto"
                    priority
                />
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </div>
        </section>
    );
}