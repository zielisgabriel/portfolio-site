import { NasaApodResponseData } from "@/@types/nasa-apod-response-data";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { getLastApodNasaService } from "@/services/get-last-apod-nasa-service";

export async function LastImageNasaApod() {
    const nasaApod = await getLastApodNasaService();

    return (
        <div className="py-20 md:py-32">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4">
                        NASA Astronomy Picture of the Day
                    </Badge>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                        Daily Space Image
                    </h2>
                </div>

                <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                    <CardContent>
                        <div className="relative aspect-video overflow-hidden">
                            <Image
                                src={nasaApod.url}
                                alt={nasaApod.title}
                                fill
                                quality={90}
                                className="object-cover rounded-xl"
                                priority
                            />
                        </div>
                    </CardContent>
                    
                    <CardHeader>
                        <CardTitle className="text-xl">
                            {nasaApod.title}
                        </CardTitle>
                        <CardDescription className="flex items-center gap-4 text-sm">
                            <span>
                                {new Date(nasaApod.date).toLocaleDateString("en-US", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric"
                                })}
                            </span>
                            {nasaApod.copyright && (
                                <span>© {nasaApod.copyright}</span>
                            )}
                        </CardDescription>
                    </CardHeader>
                </Card>
            </div>
        </div>
    );
}