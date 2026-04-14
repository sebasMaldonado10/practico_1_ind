import Link from "next/link";
import React from "react";

export default function page() {
    return (
        <div>
            <h1>Acerca de los cursos...</h1>

            <Link href={"/cursos"} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]">
            Volver
            </Link>
        </div>
    )
}