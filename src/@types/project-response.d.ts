import { Project } from "./project";


export interface ProjectResponse {
  projects: Project[],
  totalProjects: number,
  totalPages: number
}