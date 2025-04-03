"use client"

import { createContext, ReactNode, useEffect, useState } from "react";

type Project = {
    id: string,
    name: string,
    technologies: string[],
    description: string,
    imageUrl: string,
    link: string,
}

type SearchProjectsContextType = {
    projectsList: Project[]
    searchProjectList: Project[]
    listProjects: () => Promise<void>
    searchProjects: (query: string) => Promise<void>
}

type SearchProjectsProviderProps = {
    children: ReactNode
}

export const SearchProjectsContext = createContext({} as SearchProjectsContextType)

export function SearchProjectsProvider({ children }: SearchProjectsProviderProps) {
    const [projectsList, setProjectsList] = useState<Project[]>([])
    const [searchProjectList, setSearchProjectList] = useState<Project[]>(projectsList)

    async function listProjects() {
        try {
            const response = await fetch("http://localhost:3000/api/projects", {
                next: {
                    revalidate: 1800,
                }
            })

            const { data } = await response.json()

            setProjectsList(data)
            setSearchProjectList(data)
        } catch (error) {
            console.error("Error when searching for projects")
        }
    }

    async function searchProjects(query: string) {
        const projectsFiltered = projectsList.filter(project => project.name.toLowerCase().includes(query))

        setSearchProjectList(projectsFiltered)
    }

    useEffect(() => {
        listProjects()
    }, [])

    return (
        <SearchProjectsContext.Provider value={{ projectsList, searchProjectList, listProjects, searchProjects }}>
            {children}
        </SearchProjectsContext.Provider>
    )
}