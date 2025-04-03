"use client"

import { SearchProjectsContext } from "@/contexts/SearchProjectsContext";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SearchInputSchema = z.object({
    query: z.string().trim(),
})

interface SearchInputProps extends z.infer<typeof SearchInputSchema> {}

export function SearchInput() {
    const { searchProjects } = useContext(SearchProjectsContext)

    const { register, formState: { isSubmitting }, handleSubmit } = useForm({
        resolver: zodResolver(SearchInputSchema)
    })

    function handleSearchProjects({ query }: SearchInputProps) {
        searchProjects(query)
    }

    return (
        <form onSubmit={handleSubmit(handleSearchProjects)} className="flex h-10">
            <input type="text" { ...register("query") } placeholder="Digite aqui..." className="h-full bg-white text-black px-6 rounded-l" />
            <button type="submit" disabled={isSubmitting} className="flex gap-2 items-center bg-secondary cursor-pointer px-4 outline-0 rounded-r">
                <MagnifyingGlassIcon width={18} height={18} />
                <span>
                    Buscar
                </span>
            </button>
        </form>
    );
}