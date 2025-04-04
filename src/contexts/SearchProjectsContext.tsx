"use client"

import { createContext, ReactNode, useState } from "react";

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
    isLoadedList: boolean
}

type SearchProjectsProviderProps = {
    children: ReactNode
}

export const SearchProjectsContext = createContext({} as SearchProjectsContextType)

export function SearchProjectsProvider({ children }: SearchProjectsProviderProps) {
    const [projectsList, setProjectsList] = useState<Project[]>([])
    const [searchProjectList, setSearchProjectList] = useState<Project[]>(projectsList)
    const [isLoadedList, setIsLoadedList] = useState<boolean>(false)

    async function listProjects() {
        try {
            const response = await fetch("/api/projects", {
                next: {
                    revalidate: 1800,
                },
            })

            const { data } = await response.json()

            setProjectsList(data)
            setSearchProjectList(data)
            setIsLoadedList(true)
        } catch (error) {
            console.error("Error when searching for projects")
        }
    }

    async function searchProjects(query: string) {
        const projectsFiltered = projectsList.filter(project => project.name.toLowerCase().includes(query))
        
        setSearchProjectList(projectsFiltered)
    }   

    return (
        <SearchProjectsContext.Provider value={{ projectsList, searchProjectList, listProjects, searchProjects, isLoadedList }}>
            {children}
        </SearchProjectsContext.Provider>
    )
}