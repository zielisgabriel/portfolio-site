import projects from "@/database/tables/projects.json";

export class FindAllProjects {
    public execute(page: string) {
        const pageNumber = page ? Number(page) : 1;

        const projectsPerPage = 3;
        const startIndex = (pageNumber - 1) * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;

        const totalProjects = projects.length;
        const totalPages = Math.ceil(totalProjects / projectsPerPage);

        return {
            projects: projects.slice(startIndex, endIndex),
            totalProjects,
            totalPages
        };
    }
}