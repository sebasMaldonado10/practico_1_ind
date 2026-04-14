import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black px-6 py-10">
      <main className="w-full max-w-4xl rounded-2xl bg-white p-10 shadow-md dark:bg-zinc-900">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
            Bienvenido a mi aplicación en Next.js
          </h1>

          <p className="text-lg text-zinc-600 dark:text-zinc-300">
            En este proyecto trabajé con el sistema de rutas de Next.js usando
            App Router.
          </p>

          <div className="rounded-xl border border-zinc-200 p-6 dark:border-zinc-700">
            <h2 className="mb-4 text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
              Contenido realizado
            </h2>

            <ul className="list-disc space-y-2 pl-6 text-zinc-700 dark:text-zinc-300">
              <li>Creación de una ruta nueva: <span className="font-semibold">/cursos</span></li>
              <li>Creación de una ruta anidada: <span className="font-semibold">/cursos/about</span></li>
              <li>Creación de una ruta dinámica: <span className="font-semibold">/cursos/[id]</span></li>
              <li>Personalización del layout con barra de navegación y footer</li>
              <li>Modificación de la página principal</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/cursos"
              className="flex h-12 items-center justify-center rounded-full bg-black px-6 text-white transition hover:opacity-85 dark:bg-white dark:text-black"
            >
              Ver cursos
            </Link>

            <Link
              href="/cursos/about"
              className="flex h-12 items-center justify-center rounded-full border border-zinc-300 px-6 text-zinc-800 transition hover:bg-zinc-100 dark:border-zinc-600 dark:text-zinc-200 dark:hover:bg-zinc-800"
            >
              Más información
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}