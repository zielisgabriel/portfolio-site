"use client"

import { SearchProjectsContext } from "@/contexts/SearchProjectsContext";
import { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { DotsLoader } from "./DotsLoader";
import { motion } from "motion/react";

export function ProjectsList() {
    const { listProjects, searchProjectList, isLoadedList } = useContext(SearchProjectsContext)

    useEffect(() => {
        listProjects()
    }, [])

    if (isLoadedList) {
        return (
            <div className="flex justify-center">
                <ul className="grid grid-cols-2 gap-x-4 gap-y-10">
                    { searchProjectList.map(project => {
                        return (
                            <motion.li
                                key={project.id}
                                className="flex flex-col gap-4 max-w-md items-center"
                                initial={{
                                    opacity: 0,
                                    animation: "1s",
                                    translateY: 50,
                                }}    
                                animate={{
                                    opacity: 1,
                                    translateY: 0,
                                }}
                            >
                                <h1 className="text-3xl font-bold">
                                    {project.name}
                                </h1>
                                <Image src={project.imageUrl} alt="" priority={true} title={project.name} width={500} height={300} className="animate-item-float object-cover" />
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
                            </motion.li>
                        )
                    }) }
                </ul>
            </div>
        );
    }

    return (
        <DotsLoader />
    );
}