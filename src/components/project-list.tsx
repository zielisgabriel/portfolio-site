"use client";

import Image from "next/image";
import Link from "next/link";

import Astronaut2 from "../../public/astronaut2.png";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { getProjectsService } from "@/services/get-projects-service";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "./pagination";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Spinner } from "./ui/spinner";

export function ProjectsList() {
    const [page, setPage] = useState<number>(1);
    const queryClient = useQueryClient();

    const {
        data: projectsResponse,
        isLoading
    } = useQuery({
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
        return (
            <div className="flex items-center justify-center py-12">
                <Spinner className="size-6" />
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-12 relative">
            <Image
                src={Astronaut2}
                alt="Astronaut"
                className="absolute w-80 -left-96 top-20 animate-item-float md:block hidden"
            />

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {projectsResponse?.projects.map((project, index: number) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <Card className="group cursor-none hover:border-foreground/30 transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
                                <CardHeader className="pb-4">
                                    <CardTitle className="text-xl group-hover:text-foreground transition-colors">
                                        {project.title}
                                    </CardTitle>
                                    <CardDescription className="line-clamp-2">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>
                                
                                {project.imageUrl && (
                                    <CardContent className="pb-4">
                                        <div className="relative overflow-hidden rounded-lg border border-border/50">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                width={600}
                                                height={340}
                                                className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                    </CardContent>
                                )}
                                
                                <CardFooter>
                                    <div className="flex flex-wrap gap-2">
                                        {project.projectTechnologies?.slice(0, 4).map((tech, i) => (
                                            <Badge key={i} variant="secondary" className="text-xs">
                                                {tech.technology.name}
                                            </Badge>
                                        ))}
                                        {project.projectTechnologies && project.projectTechnologies.length > 4 && (
                                            <Badge variant="outline" className="text-xs">
                                                +{project.projectTechnologies.length - 4}
                                            </Badge>
                                        )}
                                    </div>
                                </CardFooter>
                            </Card>
                        </DialogTrigger>

                        <DialogOverlay className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />

                        <DialogPortal>
                            <DialogContent className="max-w-2xl">
                                <ScrollArea className="max-h-[80vh]">
                                    {project.imageUrl && (
                                        <div className="relative overflow-hidden rounded-lg mb-6">
                                            <Image
                                                src={project.imageUrl}
                                                alt={project.title}
                                                width={800}
                                                height={450}
                                                className="w-full aspect-video object-cover"
                                            />
                                        </div>
                                    )}

                                    <div className="space-y-6">
                                        <div>
                                            <DialogTitle className="text-2xl font-bold mb-2">
                                                {project.title}
                                            </DialogTitle>
                                            <DialogDescription className="text-base">
                                                {project.description}
                                            </DialogDescription>
                                        </div>

                                        <div className="flex flex-wrap gap-2">
                                            {project.projectTechnologies?.map((tech, i) => (
                                                <Badge key={tech.id} variant="secondary">
                                                    {tech.technology.name}
                                                </Badge>
                                            ))}
                                        </div>

                                        <div className="flex flex-col gap-3 pt-4">
                                            {project.repositoryUrl && (
                                                <Button variant="outline" className="w-full justify-start cursor-none" asChild>
                                                    <Link
                                                        href={project.repositoryUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <GitHubLogoIcon className="mr-2 h-4 w-4" />
                                                        Repository
                                                    </Link>
                                                </Button>
                                            )}

                                            {project.projectUrl && (
                                                <Button className="w-full justify-start cursor-none" asChild>
                                                    <Link
                                                        href={project.projectUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        <ExternalLink className="mr-2 h-4 w-4" />
                                                        View Website
                                                    </Link>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </ScrollArea>
                                <DialogClose />
                            </DialogContent>
                        </DialogPortal>
                    </Dialog>
                ))}
            </div>

            <div className="flex justify-center">
                <Pagination
                    page={page}
                    totalPages={projectsResponse?.totalPages ?? 1}
                    onPrev={() => setPage(p => Math.max(p - 1, 1))}
                    onNext={() => setPage(p => Math.min(p + 1, projectsResponse!.totalPages))}
                />
            </div>
        </div>
    );
}