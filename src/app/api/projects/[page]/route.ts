import { FindAllProjects } from "@/services/FindAllProjects";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const { pathname } = request.nextUrl;
    const parts = pathname.split('/');
    const page = parts[parts.length - 1];

    const findAllProjects = new FindAllProjects();
    const projects = await findAllProjects.execute(page);

    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}
