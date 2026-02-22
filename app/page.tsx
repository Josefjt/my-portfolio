import Link from "next/link"
import Section from "@/components/ui/Section"

export default function Home() {
  return (
    <Section>
      <div className="max-w-2xl">
        <h1 className="mb-4 text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl dark:text-slate-100">
          Hi, I&apos;m Josef.
        </h1>
        <p className="mb-6 text-base leading-7 text-slate-700 dark:text-slate-300">
          I like building sometimes useful software and learning as I go.
        </p>

        <div className="mb-6 flex flex-wrap gap-3">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-slate-300"
          >
            Browse Projects
          </Link>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          Thanks for stopping by.
        </p>
      </div>
    </Section>
  )
}
