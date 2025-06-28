export interface ProjectProps {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
    websiteUrl: string | null;
    repositories: [
        {
            type: string,
            url: string
        }
    ] | null;
    technologies: string[];
}