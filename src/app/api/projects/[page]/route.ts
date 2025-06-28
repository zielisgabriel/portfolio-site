import { FindAllProjects } from "@/services/FindAllProjects";
import { NextRequest } from "next/server";

interface ParamsProps {
    params: {
        page: string;
    }
}

export async function GET(
    request: NextRequest,
    { params }: ParamsProps
) {
    const page = params.page;

    const findAllProjects = new FindAllProjects();
    const projects = findAllProjects.execute(page);

    return new Response(JSON.stringify(projects), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    })
}