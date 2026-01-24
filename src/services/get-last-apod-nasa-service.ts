"use server"

import { NasaApodResponseData } from "@/@types/nasa-apod-response-data";
import { fetchClient } from "@/lib/fetch-client";
import { cacheLife, cacheTag } from "next/cache";

const NASA_API_KEY = process.env.NASA_API_KEY;

export async function getLastApodNasaService(): Promise<NasaApodResponseData> {
    "use cache";
    cacheTag("apod-nasa");
    cacheLife("days");

    const response = await fetchClient({
        path: `/planetary/apod?api_key=${NASA_API_KEY}`,
        host: "https://api.nasa.gov"
    });
    return await response.json();
}