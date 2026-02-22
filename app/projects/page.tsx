import Section from "@/components/ui/Section"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <Section>
      <div>
        <h1 className="mb-2 text-3xl font-bold text-slate-900 dark:text-slate-100">Projects</h1>
        <p className="mb-8 max-w-2xl text-slate-700 dark:text-slate-300">A few things I&apos;ve built</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </Section>
  )
}
