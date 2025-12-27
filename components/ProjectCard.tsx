import Link from "next/link"
import { Project } from "@/lib/projects"

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition focus-within:shadow-lg">
      <header>
        <h3 className="text-xl font-semibold mb-1">
          <Link href={`/projects/${project.slug}`} className="text-inherit">
            {project.title}
          </Link>
        </h3>
        <p className="text-sm text-gray-500 mb-3">{project.role}</p>
      </header>

      <p className="text-gray-700 mb-4">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.stack.map((s) => (
          <span
            key={s}
            className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
          >
            {s}
          </span>
        ))}
      </div>

      {project.impact && (
        <p className="text-sm text-green-700 font-medium mb-4">{project.impact}</p>
      )}

      <Link
        href={`/projects/${project.slug}`}
        className="inline-flex items-center text-sm font-medium text-black hover:underline"
        aria-label={`View case study for ${project.title}`}
      >
        View case study →
      </Link>
    </article>
  )
}
