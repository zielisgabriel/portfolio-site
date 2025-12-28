import { NasaApodResponseData } from "@/@types/nasa-apod-response-data";
import Image from "next/image";

export async function LastImageNasaApod() {
    let nasaApod: NasaApodResponseData | null = null;
    try {
        const response = await fetch(`${process.env.BASE_URL}/api/nasa-apod`, {
            method: "GET",
            cache: "force-cache",
        });

        nasaApod = await response.json();
    } catch (error) {
        nasaApod = null;
    }

    if (nasaApod === null) {
        return null;
    }

    return (
        <div className="flex flex-col max-w-xl mx-auto items-center justify-center px-4">
            <h1 className="text-3xl">
                {nasaApod.title}
            </h1>

            <Image
                src={nasaApod.url}
                alt={nasaApod.title}
                width={700}
                height={700}
                quality={100}
                className="rounded-xl w-full"
                priority
            />

            <div className="flex justify-between w-full">
                <h3 className="text-md">
                    {new Date(nasaApod.date).toLocaleDateString("pt-BR")}
                </h3>

                <h3 className="text-md">
                    &copy; {nasaApod.copyright}
                </h3>
            </div>
        </div>
    );
}