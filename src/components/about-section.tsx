import Image from "next/image";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import SpaceStation from "../../public/space-station.png";

type AboutSectionProps = {
    dict: any
}

export function AboutSection({ dict }: AboutSectionProps) {
    const skills = [
    {
        category: dict.about_me.skills.languages,
        items: ["Java", "TypeScript", "JavaScript"]
    },
    {
        category: "Back-end",
        items: ["Spring Boot", "Spring Security", "Express.js", "Node.js"]
    },
    {
        category: "Front-end",
        items: ["Next.js", "React.js", "TailwindCSS", "shadcn/ui"]
    },
    {
        category: dict.about_me.skills.databases,
        items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite"]
    },
    {
        category: dict.about_me.skills.infrastructure,
        items: ["AWS", "Docker", "CI/CD", "Linux"]
    }
];

    return (
        <section id="about" className="py-20 md:py-32">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
                        {dict.about_me.title}
                    </h2>
                    <div className="w-20 h-1 bg-foreground mx-auto rounded-full" />
                </div>

                <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
                    <div className="space-y-6">
                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">
                                    {dict.about_me.who_i_am.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    {dict.about_me.who_i_am.description[0]} <span className="text-foreground font-semibold">José Gabriel</span>, 
                                    {" " + dict.about_me.who_i_am.description[1]} <span className="text-foreground font-semibold">Zielis</span>. 
                                    {" " + dict.about_me.who_i_am.description[2]}
                                </p>
                                <p>
                                    {dict.about_me.who_i_am.description[3] + " "}<span className="text-foreground   font-medium">Next.js</span> {dict.about_me.who_i_am.description[4] + " "}
                                    <span className="text-foreground font-medium">Spring Framework</span>, {dict.about_me.who_i_am.description[5]}
                                </p>
                                <p>
                                    {dict.about_me.who_i_am.description[6] + " "}<span className="text-foreground font-medium">AWS</span>, 
                                    {" " + dict.about_me.who_i_am.description[7] + " "}
                                    <span className="text-foreground font-medium">Docker</span>.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                            <CardHeader>
                                <CardTitle className="text-2xl">{dict.about_me.skills.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {skills.map((skill) => (
                                    <div key={skill.category}>
                                        <h3 className="text-sm font-medium text-muted-foreground mb-2">
                                            {skill.category}
                                        </h3>
                                        <div className="flex flex-wrap gap-2">
                                            {skill.items.map((item) => (
                                                <Badge key={item} variant="secondary">
                                                    {item}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </CardContent>
                        </Card>
                    </div>

                    <div className="flex justify-center items-center">
                        <Image
                            src={SpaceStation}
                            alt="Space Station"
                            className="w-full max-w-md rotate-2 animate-item-float md:block hidden"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}