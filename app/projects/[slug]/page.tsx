import Section from "@/components/ui/Section"
import Link from "next/link"
import { projects } from "@/lib/projects"
import { notFound } from "next/navigation"

type Props = {
  params: { slug: string }
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) return { title: "Project — Josef" }

  return {
    title: `${project.title} — Josef`,
    description: project.summary,
  }
}

export default function ProjectPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)
  if (!project) notFound()

  return (
    <Section>
      <Link href="/projects" className="text-sm text-gray-600 hover:underline mb-4 inline-block">
        ← Back to projects
      </Link>

      <header className="mb-6">
        <h1 className="text-3xl font-bold mb-1">{project.title}</h1>
        <p className="text-sm text-gray-500">{project.role}</p>
      </header>

      <p className="text-gray-700 mb-6">{project.summary}</p>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Problem</h2>
            <p className="text-gray-700">A concise description of the problem the product addressed and why it mattered to users or the business.</p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Solution</h2>
            <p className="text-gray-700">High-level explanation of your approach, key architectural decisions, and trade-offs.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold mb-2">Impact</h2>
            <p className="text-gray-700">{project.impact ?? "(Impact metrics to add)"}</p>
          </section>
        </div>

        <aside>
          <div className="mb-6">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Tech stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="inline-block rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-600 mb-2">Role</h3>
            <p className="text-gray-700">{project.role}</p>
          </div>

          <div>
            <Link href="/contact" className="inline-flex items-center rounded-lg bg-black text-white px-4 py-2 text-sm">
              Contact about this project
            </Link>
          </div>
        </aside>
      </div>
    </Section>
  )
}
