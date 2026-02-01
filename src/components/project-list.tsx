"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

import Astronaut2 from "../../public/astronaut2.png";
import { Button } from "./ui/button";
import { ScrollArea } from "./ui/scroll-area";
import { Badge } from "./ui/badge";
import { getProjectsService } from "@/services/get-projects-service";
import { getTechnologiesService } from "@/services/get-technologies-service";
import { keepPreviousData, useQuery, useQueryClient } from "@tanstack/react-query";
import { Pagination } from "./pagination";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { ArrowRight, ExternalLink, Eye, Filter, Folder, X } from "lucide-react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Spinner } from "./ui/spinner";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { cn } from "@/lib/utils";

type Project = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    repositoryUrl?: string | null;
    projectUrl?: string | null;
    projectTechnologies?: Array<{
        id: number;
        technology: { id: number; name: string };
    }>;
};

type Technology = {
    id: number;
    name: string;
};

function TechnologyFilter({
    technologies,
    selectedIds,
    onToggle,
    onClear
}: {
    technologies: Technology[];
    selectedIds: number[];
    onToggle: (id: number) => void;
    onClear: () => void;
}) {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Filter className="h-4 w-4" />
                    <span>Filter by technology</span>
                </div>
                {selectedIds.length > 0 && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={onClear}
                        className="h-7 px-2 text-xs cursor-none"
                    >
                        <X className="h-3 w-3 mr-1" />
                        Clear filters
                    </Button>
                )}
            </div>
            <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => {
                    const isSelected = selectedIds.includes(tech.id);
                    return (
                        <Badge
                            key={tech.id}
                            variant={isSelected ? "default" : "outline"}
                            className={cn(
                                "cursor-none transition-all duration-200 select-none",
                                isSelected
                                    ? "bg-foreground text-background hover:bg-foreground/90"
                                    : "hover:bg-foreground/10 hover:border-foreground/50"
                            )}
                            onClick={() => onToggle(tech.id)}
                        >
                            {tech.name}
                            {isSelected && <X className="h-3 w-3 ml-1" />}
                        </Badge>
                    );
                })}
            </div>
        </div>
    );
}

function ProjectCard({ 
    project, 
    onSelect, 
    isSelected 
}: { 
    project: Project; 
    onSelect: () => void; 
    isSelected: boolean;
}) {
    return (
        <Card 
            onClick={onSelect}
            className={cn(
                "group cursor-none transition-all duration-300 overflow-hidden bg-card/50 backdrop-blur-sm border-border/50",
                "hover:border-foreground/30 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1",
                isSelected && "border-foreground/50 ring-1 ring-foreground/20"
            )}
        >
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg group-hover:text-foreground transition-colors line-clamp-1">
                        {project.title}
                    </CardTitle>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Eye className="h-4 w-4 text-muted-foreground" />
                    </div>
                </div>
                <CardDescription className="line-clamp-2 text-sm">
                    {project.description}
                </CardDescription>
            </CardHeader>
            
            {project.imageUrl && (
                <CardContent className="pb-3">
                    <div className="relative overflow-hidden rounded-lg border border-border/50 aspect-video">
                        <Image
                            src={project.imageUrl}
                            alt={project.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </CardContent>
            )}
            
            <CardFooter className="pt-0">
                <div className="flex flex-wrap gap-1.5">
                    {project.projectTechnologies?.slice(0, 3).map((tech) => (
                        <Badge 
                            key={tech.id} 
                            variant="secondary" 
                            className="text-xs px-2 py-0.5"
                        >
                            {tech.technology.name}
                        </Badge>
                    ))}
                    {project.projectTechnologies && project.projectTechnologies.length > 3 && (
                        <Badge variant="outline" className="text-xs px-2 py-0.5">
                            +{project.projectTechnologies.length - 3}
                        </Badge>
                    )}
                </div>
            </CardFooter>
        </Card>
    );
}

function ProjectDetails({ 
    project, 
    onClose 
}: { 
    project: Project | null; 
    onClose: () => void;
}) {
    if (!project) return null;

    return (
        <Sheet open={!!project} onOpenChange={(open) => !open && onClose()}>
            <SheetContent
                side="right"
                className="w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl gap-0 z-100"
            >
                <Separator className="mt-12" />
                <ScrollArea className="h-full">
                    <div className="relative">
                        {project.imageUrl && (
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                            </div>
                        )}
                    </div>

                    <div className="p-6 space-y-6">
                        <SheetHeader className="p-0 space-y-3">
                            <div className="flex items-center gap-2">
                                <Folder className="h-5 w-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground uppercase tracking-wider font-medium">
                                    Project
                                </span>
                            </div>
                            <SheetTitle className="text-2xl md:text-3xl font-bold tracking-tight">
                                {project.title}
                            </SheetTitle>
                        </SheetHeader>

                        <p className="text-muted-foreground leading-relaxed">
                            {project.description}
                        </p>

                        <Separator />

                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Technologies
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.projectTechnologies?.map((tech) => (
                                    <Badge 
                                        key={tech.id} 
                                        variant="secondary"
                                        className="px-3 py-1"
                                    >
                                        {tech.technology.name}
                                    </Badge>
                                ))}
                            </div>
                        </div>

                        <Separator />

                        <div className="space-y-3">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                                Links
                            </h3>
                            <div className="grid gap-3">
                                {project.repositoryUrl && (
                                    <Button 
                                        variant="outline" 
                                        className="w-full justify-between h-12 cursor-none group/btn" 
                                        asChild
                                    >
                                        <Link
                                            href={project.repositoryUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <GitHubLogoIcon className="h-5 w-5" />
                                                <span>View Repository</span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                                        </Link>
                                    </Button>
                                )}

                                {project.projectUrl && (
                                    <Button 
                                        className="w-full justify-between h-12 cursor-none group/btn" 
                                        asChild
                                    >
                                        <Link
                                            href={project.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <ExternalLink className="h-5 w-5" />
                                                <span>Visit Live Site</span>
                                            </div>
                                            <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover/btn:opacity-100 group-hover/btn:translate-x-0 transition-all" />
                                        </Link>
                                    </Button>
                                )}

                                {!project.repositoryUrl && !project.projectUrl && (
                                    <p className="text-sm text-muted-foreground italic">
                                        No external links available for this project.
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

export function ProjectsList() {
    const [page, setPage] = useState<number>(1);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [selectedTechIds, setSelectedTechIds] = useState<number[]>([]);
    const queryClient = useQueryClient();

    const { data: technologies = [] } = useQuery({
        queryKey: ["technologies"],
        queryFn: () => getTechnologiesService(),
        staleTime: Infinity
    });

    const {
        data: projectsResponse,
        isLoading
    } = useQuery({
        queryKey: ["projects", page, selectedTechIds],
        queryFn: () => getProjectsService(page, selectedTechIds.length > 0 ? selectedTechIds : undefined),
        placeholderData: keepPreviousData
    });

    useEffect(() => {
        setPage(1);
    }, [selectedTechIds]);

    const handleToggleTech = (id: number) => {
        setSelectedTechIds((prev) =>
            prev.includes(id) ? prev.filter((t) => t !== id) : [...prev, id]
        );
    };

    const handleClearFilters = () => {
        setSelectedTechIds([]);
    };

    const prefetchNextPage = () => {
        if (projectsResponse?.totalPages && page < projectsResponse.totalPages) {
            queryClient.prefetchQuery({
                queryKey: ["projects", page + 1, selectedTechIds],
                queryFn: () => getProjectsService(page + 1, selectedTechIds.length > 0 ? selectedTechIds : undefined)
            });
        }
    };

    if (isLoading && !projectsResponse) {
        return (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
                <Spinner className="size-8" />
                <p className="text-sm text-muted-foreground">Loading projects...</p>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-8 relative">
            <Image
                src={Astronaut2}
                alt="Astronaut floating in space"
                className="absolute w-80 -left-96 top-20 animate-item-float md:block hidden pointer-events-none select-none"
            />

            {technologies.length > 0 && (
                <div className="max-w-4xl mx-auto w-full">
                    <TechnologyFilter
                        technologies={technologies}
                        selectedIds={selectedTechIds}
                        onToggle={handleToggleTech}
                        onClear={handleClearFilters}
                    />
                </div>
            )}

            {!projectsResponse?.projects?.length ? (
                <div className="flex flex-col items-center justify-center py-16 gap-4">
                    <Folder className="size-12 text-muted-foreground/50" />
                    <p className="text-muted-foreground">
                        {selectedTechIds.length > 0
                            ? "No projects found with selected technologies."
                            : "No projects found."}
                    </p>
                    {selectedTechIds.length > 0 && (
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleClearFilters}
                            className="cursor-none"
                        >
                            Clear filters
                        </Button>
                    )}
                </div>
            ) : (
                <>
                    <div 
                        className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
                        onMouseEnter={prefetchNextPage}
                    >
                        {projectsResponse.projects.map((project: Project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onSelect={() => setSelectedProject(project)}
                                isSelected={selectedProject?.id === project.id}
                            />
                        ))}
                    </div>

                    {projectsResponse.totalPages > 1 && (
                        <div className="flex justify-center">
                            <Pagination
                                page={page}
                                totalPages={projectsResponse.totalPages}
                                onPrev={() => setPage(p => Math.max(p - 1, 1))}
                                onNext={() => setPage(p => Math.min(p + 1, projectsResponse.totalPages))}
                            />
                        </div>
                    )}
                </>
            )}

            <ProjectDetails 
                project={selectedProject} 
                onClose={() => setSelectedProject(null)} 
            />
        </div>
    );
}