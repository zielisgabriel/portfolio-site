import { NextResponse } from "next/server";
import path from "node:path";

const technologiesIcons = {
    nextjs: "https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white",
    reactjs: "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
    tailwind: "https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white",
    html: "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
    css: "https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white",
    js: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
    ts: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
    nodejs: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white",
    expressjs: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB",
}

const projects = [
    {
        id: "project-1",
        name: "Gerenciador de links",
        description: "Site personalizado para gerenciar links.",
        technologies: [
            technologiesIcons.html,
            technologiesIcons.css,
            technologiesIcons.js,
        ],
        imageUrl: "https://res.cloudinary.com/dfyn7y5rn/image/upload/v1743692462/gerenciador-de-links-template_gntlus.png",
        link: "https://zielisgabriel-link.vercel.app/"
    },
    {
        id: "project-2",
        name: "Sorteador de números",
        description: "Site para sortear números.",
        technologies: [
            technologiesIcons.html,
            technologiesIcons.css,
            technologiesIcons.js,
        ],
        imageUrl: "https://res.cloudinary.com/dfyn7y5rn/image/upload/v1743692390/numbers-sorteador_jodkwk.png",
        link: "https://numbers-sorteador.vercel.app/",
    },
]

export async function GET() {
    return NextResponse.json({ data: projects })
}