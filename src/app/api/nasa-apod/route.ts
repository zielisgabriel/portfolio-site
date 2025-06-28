import { FetchLastApodNasa } from "@/services/FetchLastApodNasa";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
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