"use server";

export async function getLastApodNasa() {
    try {
        const NASA_API_KEY = process.env.NASA_API_KEY;
        const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`);
        const data = await response.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}