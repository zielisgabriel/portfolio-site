import { FetchLastApodNasa } from "@/services/fetch-last-apod-nasa";

export async function GET() {
    try {
        const data = await new FetchLastApodNasa().execute();
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