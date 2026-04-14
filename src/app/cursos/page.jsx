import Link from "next/link";
import React from "react";

export default function page () {
    return (
        <div className="">
            <h1>Cursos disponibles:</h1>

            <ul className="p-4 text-zinc-400">
                <li className="p-2 hover:text-white">
                    <Link href={"/cursos/frontend"}>Frontend</Link>
                </li>
                <li className="p-2 hover:text-white">
                    <Link href={"/cursos/backend"}>backend</Link>
                </li>
                <li className="p-2 hover:text-white">
                    <Link href={"/cursos/devops"}>Devops</Link>
                </li>
                    <Link href={"/cursos/about"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
                    Mas información...
                    </Link>
                </ul>
        </div>
    )
}