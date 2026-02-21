import Link from "next/link"
import { notFound } from "next/navigation"
import Section from "@/components/ui/Section"
import { projects } from "@/lib/projects"

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)
  if (!project) return { title: "Project | Josef" }

  return {
    title: `${project.title} | Josef`,
    description: project.summary,
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const project = projects.find((entry) => entry.slug === slug)
  if (!project) notFound()

  return (
    <Section>
      <Link
        href="/projects"
        className="mb-4 inline-block text-sm text-slate-600 underline-offset-4 hover:underline dark:text-slate-300"
      >
        {"<-"} Back to projects
      </Link>

      <header className="mb-6">
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h1>
        <p className="text-sm text-slate-500 dark:text-slate-300">{project.role}</p>
      </header>

      <p className="mb-8 max-w-3xl text-slate-700 dark:text-slate-300">{project.summary}</p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <section className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Problem</h2>
            <p className="text-slate-700 dark:text-slate-300">{project.problem}</p>
          </section>

          <section className="mb-6">
            <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Solution</h2>
            <p className="text-slate-700 dark:text-slate-300">{project.solution}</p>
          </section>

          <section>
            <h2 className="mb-2 text-lg font-semibold text-slate-900 dark:text-slate-100">Impact</h2>
            <p className="text-slate-700 dark:text-slate-300">{project.impact ?? "Impact details coming soon."}</p>
          </section>
        </div>

        <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((item) => (
                <span
                  key={item}
                  className="inline-block rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700 dark:bg-slate-800 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">Role</h3>
            <p className="text-slate-700 dark:text-slate-300">{project.role}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
            >
              View repository
            </a>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100"
              >
                View live demo
              </a>
            )}
          </div>
        </aside>
      </div>
    </Section>
  )
}
