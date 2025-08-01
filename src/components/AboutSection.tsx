import { Cinzel } from "next/font/google";

import SpaceStation from "../../public/space-station.png";
import Image from "next/image";

const cinzel = Cinzel({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
})

export function AboutSection() {
    return (
        <section id="about" className="py-12 px-4">
            <div className="grid md:grid-cols-[1.2fr_1fr] grid-cols-1 justify-center max-w-7xl mx-auto">
            <div className="flex flex-col gap-6">
                <div className="bg-primary/60 p-4 rounded-xl border border-border-color">
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

                <div className="bg-primary/60 p-4 rounded-xl border border-border-color">
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
    );
}