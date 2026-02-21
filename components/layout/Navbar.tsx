"use client"

import Link from "next/link"
import { GITHUB_PROFILE_URL, NAV_LINKS } from "@/lib/constants"
import Container from "@/components/ui/Container"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import dynamic from "next/dynamic"

const ThemeToggle = dynamic(() => import("@/components/ui/ThemeToggle"), {
  ssr: false,
})

export default function Navbar() {
  const pathname = usePathname() || "/"

  return (
    <header className="sticky top-0 z-40 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-slate-800 dark:bg-slate-950/90">
      <Container>
        <nav className="flex min-h-16 flex-wrap items-center justify-between gap-3 py-3">
          <Link href="/" className="text-lg font-semibold text-slate-900 dark:text-slate-100">
            Josef
          </Link>

          <div className="flex items-center gap-2 sm:gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "rounded-md px-2 py-1 text-sm transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400",
                    isActive
                      ? "font-semibold text-slate-900 dark:text-slate-100"
                      : "text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-slate-100"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            })}

            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-gray-300 px-3 py-1 text-sm text-slate-700 transition hover:border-slate-400 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:border-slate-700 dark:text-slate-200 dark:hover:border-slate-500 dark:hover:text-slate-100"
            >
              GitHub
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
