"use server";

import { prisma } from "@/lib/prisma";
import { cacheLife, cacheTag } from "next/cache";

export async function getProjectsService(
  page: number,
  technologyIds?: number[]
) {
  "use cache";

  const pageIndex = page - 1;
  const projectsPerPage = 4;

  cacheTag("projects");
  cacheLife("weeks");

  const whereClause = technologyIds?.length
    ? {
        projectTechnologies: {
          some: {
            technologyId: { in: technologyIds }
          }
        }
      }
    : {};

  const [projects, totalProjects] = await Promise.all([
    prisma.project.findMany({
      where: whereClause,
      include: {
        projectTechnologies: {
          include: { technology: true }
        }
      },
      skip: pageIndex * projectsPerPage,
      take: projectsPerPage
    }),
    prisma.project.count({ where: whereClause })
  ]);

  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  return {
    projects,
    totalProjects,
    totalPages
  };
}
