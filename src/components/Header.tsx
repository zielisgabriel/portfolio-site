"use client"

import IconZ from "../../public/logo-zls.svg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import clsx from "clsx";
import { useMotionValueEvent, useScroll } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useState } from "react";

export function Header() {
    const { scrollY } = useScroll()
    const [scrollYValue, setScrollYValue] = useState<number>(0)
    const pathname = usePathname()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest < 200) {
            return setScrollYValue(latest)
        }

        return setScrollYValue(1)
    })

    return (
        <header className={twMerge(clsx("w-full py-4 z-100 fixed bg-secondary px-12", {
            "bg-transparent py-12": scrollYValue === 0,
        }))}>
            <div className="max-w-7xl m-auto flex justify-between items-center">
                <Link href={"/"} title="Home" className="hover:-translate-y-1">
                    <Image src={IconZ} alt="" width={32} height={32} />
                </Link>

                <ul className="flex gap-8 uppercase">
                    
                    <li className={clsx("hover:-translate-y-0.5 opacity-70", {
                        "border-b-2 border-b-white opacity-100 font-bold": pathname === "/",
                    })}>
                        <Link title="Home" href={"/"}>
                            Home
                        </Link>
                    </li>

                    <li className={clsx("hover:-translate-y-0.5 opacity-70", {
                        "border-b-2 border-b-white opacity-100 font-bold": pathname === "/projects",
                    })}>
                        <Link title="Projetos" href={"/projects"}>
                            Projetos
                        </Link>
                    </li>

                    <li className={clsx("hover:-translate-y-0.5 opacity-70", {
                        "border-b-2 border-b-white opacity-100 font-bold": pathname === "/skills",
                    })}>
                        <Link title="Habilidades" href={"/skills"}>
                            Habilidades
                        </Link>
                    </li>

                    <li className={clsx("hover:-translate-y-0.5 opacity-70", {
                        "border-b-2 border-b-white opacity-100 font-bold": pathname === "/contacts",
                    })}>
                        <Link title="Contatos" href={"/contacts"}>
                            Contatos
                        </Link>
                    </li>
                </ul>
            </div>
        </header>   
    );
}