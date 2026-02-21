import Link from "next/link"
import { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:shadow-lg focus-within:shadow-lg dark:border-slate-800 dark:bg-slate-950">
      <header>
        <h2 className="mb-1 text-xl font-semibold text-slate-900 dark:text-slate-100">
          <Link href={`/projects/${project.slug}`} className="text-inherit">
            {project.title}
          </Link>
        </h2>
        <p className="mb-3 text-sm text-slate-500 dark:text-slate-300">{project.role}</p>
      </header>

      <p className="mb-4 text-slate-700 dark:text-slate-300">{project.summary}</p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.stack.map((s) => (
          <span
            key={s}
            className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {s}
          </span>
        ))}
      </div>

      {project.impact && <p className="mb-4 text-sm font-medium text-emerald-700 dark:text-emerald-300">{project.impact}</p>}

      <div className="flex flex-wrap items-center gap-4">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center text-sm font-medium text-slate-900 underline-offset-4 hover:underline dark:text-slate-100"
          aria-label={`View case study for ${project.title}`}
        >
          Read case study
        </Link>
        <a
          href={project.repositoryUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center text-sm font-medium text-slate-700 underline-offset-4 hover:underline dark:text-slate-300"
          aria-label={`Open GitHub repository for ${project.title}`}
        >
          View repository
        </a>
      </div>
    </article>
  )
}
