"use server"

import { NasaApodResponseData } from "@/@types/nasa-apod-response-data";
import { fetchClient } from "@/lib/fetch-client";
import { cacheLife, cacheTag } from "next/cache";

const NASA_API_KEY = process.env.NASA_API_KEY;

export async function getLastApodNasaService(): Promise<NasaApodResponseData | null> {
    "use cache";
    cacheTag("apod-nasa");
    cacheLife("days");

    try {
        const response = await fetchClient({
            path: `/planetary/apod?api_key=${NASA_API_KEY}`,
            host: "https://api.nasa.gov"
        });

        if (!response.ok) return null;

        return await response.json();
    } catch (error) {
        return null;
    }
}