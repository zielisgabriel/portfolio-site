"use client"

import { ProjectProps } from "@/@types/Project";
import clsx from "clsx";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import Astronaut2 from "../../public/astronaut2.png"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";

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
            <ul className="flex flex-col relative gap-4 max-w-xl">
                <Image
                    src={Astronaut2}
                    alt="Astronaut"
                    className="absolute w-xl mx-auto top-[16rem] -left-[35rem] animate-item-float md:block hidden"
                />

                {
                    projectsList.map((project, index: number) => (
                        <Dialog key={index}>
                            <DialogTrigger asChild>
                                <button className="flex flex-col relative gap-4 max-w-xl p-4 mx-auto rounded  bg-secondary/60 hover:cursor-none -translate-y-2 focus:outline-none border border-border-color">
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
                                                <Badge>
                                                    {technology}
                                                </Badge>
                                            ))
                                        }
                                    </ul>
                                </button>
                            </DialogTrigger>

                            <DialogOverlay className="fixed z-10 inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px]" />

                            <DialogPortal>
                                <DialogContent>
                                    <ScrollArea className="max-h-full w-full rounded-md">
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
                                                <DialogTitle className={`${cinzel.className} text-2xl sm:text-3xl text-foreground`}>
                                                    {project.title}
                                                </DialogTitle>

                                                <DialogDescription>
                                                    {project.description}
                                                </DialogDescription>

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
                                                                    prefetch={true}
                                                                    href={repository.url}
                                                                    title="Link to repository"
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                >
                                                                    <Button className="w-full">
                                                                        <p>
                                                                            {repository.type} repository
                                                                        </p>
                                                                    </Button>
                                                                </Link>
                                                            </div>
                                                        );
                                                    })
                                                )}

                                                {
                                                    (project.websiteUrl != null) && (
                                                        <Link
                                                            prefetch={true}
                                                            href={project.websiteUrl}
                                                            title="Link to repository"
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                        >
                                                            <Button variant={"secondary"} className="w-full">
                                                                <p>
                                                                    View website
                                                                </p>
                                                            </Button>
                                                        </Link>
                                                    )
                                                }
                                            </div>
                                        </div>
                                        <DialogClose />
                                    </ScrollArea>
                                </DialogContent>
                            </DialogPortal>
                        </Dialog>
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
                                        "flex justify-center items-center w-10 h-10 rounded cursor-none",
                                        selectedProjectPage === String(index + 1) ? "bg-foreground text-background" : "bg-secondary/60 text-foreground"
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