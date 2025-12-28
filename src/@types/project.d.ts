export interface Project {
    id: number;
    title: string;
    description: string;
    imageUrl: string | null;
    websiteUrl?: string;
    repositories?: { type: string; url: string }[] | null;
    technologies: string[];
}