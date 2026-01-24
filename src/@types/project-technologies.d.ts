import { Project } from "./project";
import { Technology } from "./technology";

export interface ProjectTechnologies {
  id: number,
  technology: Technology,
  project: Project
}