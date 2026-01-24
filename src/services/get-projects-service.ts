"use server";

import { prisma } from "@/lib/prisma";
import { cacheTag } from "next/cache";

export async function getProjectsService(page: number) {
  "use cache";

  page = --page;

  console.log("getProjectsService | Page: ", page);

  cacheTag("projects");

  const projectsPerPage = 4;

  const projects = await prisma.project.findMany({
    include: {
      projectTechnologies: {
        include: { project: true, technology: true }
      }
    },
    skip: (page * projectsPerPage),
    take: projectsPerPage
  });

  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  return {
    projects: projects,
    totalProjects,
    totalPages
  };
}
