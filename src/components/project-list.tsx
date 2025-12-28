"use client";

import { Cinzel } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import Astronaut2 from "../../public/astronaut2.png"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { getProjectsService } from "@/services/get-projects-service";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { ProjectResponse } from "@/@types/project-response";
import { Pagination } from "./pagination";
import { useEffect, useState } from "react";
import { Card, CardAction, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const cinzel = Cinzel({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export function ProjectsList() {
    const [page, setPage] = useState<number>(1);
    const queryClient = useQueryClient();

    const {
        data: projectsResponse,
        isLoading
    } = useQuery<ProjectResponse>({
        queryKey: ["projects", page],
        queryFn: () => getProjectsService(page),
        placeholderData: keepPreviousData
    });

    useEffect(() => {
    if (projectsResponse?.totalPages && page < projectsResponse.totalPages) {
            queryClient.prefetchQuery({
            queryKey: ["projects", page + 1],
            queryFn: () => getProjectsService(page + 1)
        });
    }
    }, [page, projectsResponse, queryClient]);

    if (isLoading) {
        return null;
    }

    return (
        <div className="flex flex-col gap-14 mx-auto items-center">
            <ul className="flex flex-col relative gap-4 max-w-xl">
                <Image
                    src={Astronaut2}
                    alt="Astronaut"
                    className="absolute w-xl mx-auto top-[16rem] -left-[35rem] animate-item-float md:block hidden"
                />

                {
                    projectsResponse?.projects.map((project, index: number) => (
                        <Dialog key={index}>
                            <DialogTrigger>
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="text-2xl">
                                            {project.title}
                                        </CardTitle>
                                        <CardDescription className="text-md">
                                            {project.description}
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent>
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
                                    </CardContent>
                                    <CardFooter>
                                        <ul className="flex flex-wrap justify-center gap-2">
                                            {
                                                (project.technologies !== null || project.technologies !== undefined) && project.technologies.map((technology, index: number) => (
                                                    <Badge key={index}>
                                                        {technology}
                                                    </Badge>
                                                ))
                                            }
                                        </ul>
                                    </CardFooter>
                                </Card>
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

                                        <div className="flex flex-col gap-4 justify-between h-full mt-4">
                                            <div className="flex flex-col gap-2">
                                                <DialogTitle className={`${cinzel.className} text-2xl sm:text-3xl text-foreground`}>
                                                    {project.title}
                                                </DialogTitle>

                                                <DialogDescription>
                                                    {project.description}
                                                </DialogDescription>

                                                <div className="flex flex-wrap gap-2">
                                                    {
                                                        (project.technologies !== null || project.technologies !== undefined) && project.technologies.map((technology, index: number) => (
                                                            <Badge key={index}>
                                                                {technology}
                                                            </Badge>
                                                        ))
                                                    }
                                                </div>
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

            <Pagination
                page={page}
                totalPages={projectsResponse?.totalPages ?? 1}
                onPrev={() => setPage(p => Math.max(p - 1, 1))}
                onNext={() => setPage(p => Math.min(p + 1, projectsResponse!.totalPages))}
            />
        </div>
    );
}