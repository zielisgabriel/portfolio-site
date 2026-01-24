import { getLastApodNasaService } from "@/services/get-last-apod-nasa-service";

export async function GET() {
    try {
        const data = await getLastApodNasaService();
        const transformed = { ...data, source: 'proxied-through-nextjs' };

        return new Response(JSON.stringify(transformed), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        })
    } catch (error: any) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
}