"use client"

import { ProjectProps } from "@/@types/Project";
import clsx from "clsx";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { Dialog } from "radix-ui";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Astronaut2 from "../../public/astronaut2.png"
import { Cross1Icon } from "@radix-ui/react-icons";

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
})

export function ProjectsList() {
    const [projectsList, setProjectsList] = useState<ProjectProps[]>([]);
    const [totalPages, setTotalPages] = useState<number | null>(null);

    const {register, watch} = useForm({
        defaultValues: {
            projectPage: "1",
        }
    });

    const selectedProjectPage = watch("projectPage");

    async function findAllProjects(page: string) {
        const findAllProjects = await fetch(`/api/projects/${page}`);
        const data = await findAllProjects.json();

        setTotalPages(data.totalPages);
        setProjectsList(data.projects);
    }

    useEffect(() => {
        findAllProjects(selectedProjectPage);
    }, [selectedProjectPage]);

    return (
        <div className="flex flex-col gap-14 mx-auto items-center">
            <ul className="flex flex-col gap-4 max-w-xl">
                <Image
                    src={Astronaut2}
                    alt="Astronaut"
                    className="absolute w-xl mx-auto top-[16rem] -left-[10rem] animate-item-float md:block hidden"
                />

                {
                    projectsList.map((project, index: number) => (
                        <Dialog.Root key={index}>
                            <Dialog.Trigger asChild>
                                <button className="flex flex-col relative gap-4 max-w-xl p-4 mx-auto rounded cursor-pointer bg-primary hover:-translate-y-2 focus:outline-none border border-border-color">
                                    {
                                        (project.imageUrl !== null) && (
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                width={1920}
                                                height={1080}
                                                className="w-full rounded border border-border-color"
                                            />
                                        )
                                    }

                                    <div className="flex flex-col items-center gap-2">
                                        <h2 className={`${cinzel.className} sm:text-3xl text-2xl`}>
                                            {project.title}
                                        </h2>
                                        <p className="md:text-lg text-md opacity-80">
                                            {project.description}
                                        </p>
                                    </div>

                                    <ul className="flex flex-wrap justify-center gap-2">
                                        {
                                            (project.technologies !== null || project.technologies !== undefined) && project.technologies.map((technology, index: number) => (
                                                <li className="bg-foreground px-1.5 py-0.5 rounded-full border border-border-color-foreground" key={index}>
                                                    <p className="text-sm text-background font-medium">
                                                        {technology}
                                                    </p>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </button>
                            </Dialog.Trigger>

                            <Dialog.Overlay className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px]" />

                            <Dialog.Portal>
                                <Dialog.Content className="flex flex-col gap-4 fixed bg-primary left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded p-4 pt-14 focus:outline-none w-[280px] sm:w-[550px] border border-border-color">
                                    <div className="flex justify-center items-center object-cover">
                                        {
                                            (project.imageUrl !== null) && (
                                                <Image
                                                    src={project.imageUrl}
                                                    alt={project.title}
                                                    width={1920}
                                                    height={1080}
                                                    className="rounded w-full border border-border-color"
                                                />
                                            )
                                        }
                                    </div>

                                    <div className="flex flex-col gap-4 justify-between h-full">
                                        <div className="flex flex-col gap-2">
                                            <Dialog.Title className={`${cinzel.className} text-2xl sm:text-3xl text-foreground`}>
                                                {project.title}
                                            </Dialog.Title>
                                            
                                            <Dialog.Description className="text-md sm:text-lg text-foreground opacity-80">
                                                {project.description}
                                            </Dialog.Description>

                                            <ul className="flex flex-wrap gap-2">
                                                {
                                                    (project.technologies !== null || project.technologies !== undefined) && project.technologies.map((technology, index: number) => (
                                                        <li className="bg-foreground py-1 px-2 rounded-full border border-border-color-foreground" key={index}>
                                                            <p className="text-sm text-background font-medium">
                                                                {technology}
                                                            </p>
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>

                                        <div className="flex flex-col gap-4">
                                            {Array.isArray(project.repositories) && project.repositories.length > 0 && (
                                                project.repositories.map((repository, index: number) => {
                                                    return (
                                                        <div key={index}>
                                                            <Link
                                                                href={repository.url}
                                                                title="Link to repository"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                            >
                                                                <button className="w-full border border-border-color-foreground">
                                                                    <p className="text-md sm:text-lg bg-foreground text-background p-2 rounded hover:opacity-80 cursor-pointer">
                                                                        {repository.type} repository
                                                                    </p>
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    );
                                                })
                                            )}

                                            {
                                                (project.websiteUrl != null) && (
                                                    <Link
                                                        href={project.websiteUrl}
                                                        title="Link to repository"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <button className="w-full border border-border-color-foreground">
                                                            <p className="text-md sm:text-lg bg-foreground text-background p-2 rounded hover:opacity-80 cursor-pointer">
                                                                View website
                                                            </p>
                                                        </button>
                                                    </Link>
                                                )
                                            }
                                        </div>
                                    </div>

                                    <Dialog.Close className="absolute top-4 right-4 cursor-pointer">
                                        <Cross1Icon className="w-6 h-6" />
                                    </Dialog.Close>
                                </Dialog.Content>
                            </Dialog.Portal>
                        </Dialog.Root>
                    ))
                }
            </ul>

            <div className="flex justify-center gap-2">
                {
                    (totalPages !== null && totalPages > 1) && (
                        Array.from({length: totalPages}, (_, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    id={`projectPage${index + 1}`}
                                    hidden
                                    value={index + 1}
                                    {...register("projectPage")}
                                />
                                <label
                                    htmlFor={`projectPage${index + 1}`}
                                    className={clsx(
                                        "flex justify-center items-center w-10 h-10 rounded cursor-pointer",
                                        selectedProjectPage === String(index + 1) ? "bg-foreground text-background" : "bg-primary text-foreground"
                                    )}
                                >
                                    <p className="text-2xl">
                                        {index + 1}
                                    </p>
                                </label>
                            </div>
                        ))
                    )
                }                
            </div>
        </div>
    );
}