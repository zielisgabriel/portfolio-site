import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Página não encontrada",
    description: "A página não foi encontrada."
}

export default function NotFound() {
    return (
        <>
            <main className="flex flex-col gap-2 justify-center items-center h-screen">
                <h1 className="text-2xl font-bold">Acho que você foi longe demais :/</h1>
                <h2 className="text-sm opacity-80">A página não foi encontrada</h2>
                <button className="bg-white text-black rounded hover:bg-gray-200 hover:rounded-3xl pointer">
                    <Link href={"/"} className="py-2 px-2 flex items-center gap-2">
                        <ArrowLeftIcon width={20} height={20} />
                        <span>Voltar</span>
                    </Link>
                </button>
            </main>
        </>
    );
}