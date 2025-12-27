import Section from "@/components/ui/Section"
import Link from "next/link"

export default function Home() {
  return (
    <Section>
      <div className="grid gap-10 md:grid-cols-2 items-center">
        <div>
          {/* <p className="text-sm text-gray-500 mb-2">Hi, I’m Josef</p> */}

          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-4">
            Hi, I’m Josef
          </h1>

          <p className="text-gray-600 max-w-xl mb-6">
            I build clean, scalable web & mobile applications focused on performance, accessibility, and great UX.
          </p>

          <div className="flex gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition bg-black text-white hover:bg-gray-800"
            >
              View Projects
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition text-gray-600 hover:text-black"
            >
              About Me
            </Link>
          </div>
        </div>

        <div className="flex justify-center md:justify-end">
          <div className="w-48 h-48 rounded-full bg-gradient-to-tr from-indigo-500 to-teal-400 flex items-center justify-center text-white text-2xl font-bold">
            JS
          </div>
        </div>
      </div>
    </Section>
  )
}
