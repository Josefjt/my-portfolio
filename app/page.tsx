import Link from "next/link"
import Section from "@/components/ui/Section"
import { GITHUB_PROFILE_URL } from "@/lib/constants"

export default function Home() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="mb-2 text-sm font-medium uppercase tracking-wide text-slate-500 dark:text-slate-300">
          Software Engineer Portfolio
        </p>
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
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100"
          >
            View GitHub Profile
          </a>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-300">
          Thanks for stopping by.
        </p>
      </div>
    </Section>
  )
}
