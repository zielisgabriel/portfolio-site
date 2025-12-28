import { Cinzel } from "next/font/google";

import SpaceStation from "../../public/space-station.png";
import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const cinzel = Cinzel({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

export function AboutSection() {
    return (
        <section id="about" className="py-12 px-4">
            <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 justify-center max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle className={`${cinzel.className} text-4xl`}>
                            About me
                        </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col gap-4">
                        <p className="text-md leading-loose opacity-90 tracking-wide">
                        Hello, my name is José Gabriel, but you can call me Zielis. I am a programming student currently pursuing a degree in Systems Analysis and Development. As full-stack developer, I have hands-on experience building personal projects with technologies such as Next.js and the Spring Framework, where I apply SOLID and Domain-Driven Design (DDD) principles to deliver maintainable and scalable code.
                        </p>

                        <p className="text-md leading-loose opacity-90 tracking-wide">
                        In addition to backend and frontend development, I have skills in deploying applications to cloud environments using AWS, as well as implementing continuous integration and continuous deployment (CI/CD) pipelines to automate workflows and ensure high-quality delivery. I also work with containerization tools like Docker to manage infrastructure more efficiently.
                        </p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className={`${cinzel.className} text-4xl`}>
                            Skills
                        </CardTitle>
                    </CardHeader>

                    <CardContent>
                        <div>
                            <h3 className={`${cinzel.className} text-xl`}>
                                Langs
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                <Badge>
                                    Java
                                </Badge>

                                <Badge>
                                    TypeScript
                                </Badge>
                            </ul>
                            </div>

                            <div>
                            <h3 className={`${cinzel.className} text-xl`}>
                                Back-end
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                <Badge>
                                    Spring Framework
                                </Badge>

                                <Badge>
                                    Express.js
                                </Badge>
                            </ul>
                            </div>

                            <div>
                            <h3 className={`${cinzel.className} text-xl`}>
                                Front-end
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                <Badge>
                                    Next.js
                                </Badge>

                                <Badge>
                                    React.js
                                </Badge>

                                <Badge>
                                    TailwindCSS
                                </Badge>
                            </ul>
                        </div>

                        <div>
                            <h3 className={`${cinzel.className} text-xl`}>
                                Databases
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                <Badge>
                                    MySQL
                                </Badge>

                                <Badge>
                                    PostgreSQL
                                </Badge>

                                <Badge>
                                    SQLite
                                </Badge>
                            </ul>
                        </div>

                        <div>
                            <h3 className={`${cinzel.className} text-xl`}>
                                Infrastructure
                            </h3>

                            <ul className="flex flex-wrap gap-2">
                                <Badge>
                                    AWS
                                </Badge>

                                <Badge>
                                    Docker
                                </Badge>
                            </ul>
                        </div>
                    </CardContent>
                </Card>
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
    );
}