"use client"

import { SearchProjectsContext } from "@/contexts/SearchProjectsContext";
import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";

export function ProjectsList() {
    const { searchProjectList } = useContext(SearchProjectsContext)

    return (
        <div className="flex justify-center">
            <ul className="grid grid-cols-2 gap-x-4 gap-y-10">
                { searchProjectList.map(project => {
                    return (
                        <li key={project.id} className="flex flex-col gap-4 max-w-md items-center">
                            <h1 className="text-3xl font-bold">
                                {project.name}
                            </h1>
                            <Image src={project.imageUrl} alt="" priority title={project.name} width={500} height={300} className="animate-item-float object-cover" />
                            <ul className="flex flex-wrap">
                                { project.technologies.map(technologie => {
                                    return (
                                        <li key={technologie}>
                                            <img src={technologie} alt=""  />
                                        </li>
                                    )
                                }) }
                            </ul>
                            <p className="font-light">
                                {project.description}
                            </p>
                            
                            <Link href={project.link} title={project.name} className="w-[75%]">
                                <button className="bg-span-color hover:bg-span-color-hover hover:rounded-md hover:-translate-y-1 px-6 py-2 cursor-pointer rounded w-full">
                                    Visualizar
                                </button>
                            </Link>
                        </li>
                    )
                }) }
            </ul>
        </div>
    );
}