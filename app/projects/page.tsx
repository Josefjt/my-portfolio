import Section from "@/components/ui/Section"
import ProjectCard from "@/components/ProjectCard"
import { projects } from "@/lib/projects"

export default function ProjectsPage() {
  return (
    <Section>
      <div>
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-gray-600 mb-6 max-w-2xl">Selected case studies that highlight the problem, my role, the technical decisions, and the outcome.</p>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </Section>
  )
}
