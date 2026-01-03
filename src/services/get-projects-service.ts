"use server";

import { ProjectResponse } from "@/@types/project-response";
import projects from "@/database/tables/projects.json";

export async function getProjectsService(page: number): Promise<ProjectResponse> {
  const projectsPerPage = 4;

  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;

  const totalProjects = projects.length;
  const totalPages = Math.ceil(totalProjects / projectsPerPage);

  return {
    projects: projects.slice(startIndex, endIndex),
    totalProjects,
    totalPages
  };
}
