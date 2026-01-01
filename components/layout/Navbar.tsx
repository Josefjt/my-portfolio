"use client"

import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"
import Container from "@/components/ui/Container"
import ThemeToggle from "@/components/ui/ThemeToggle"
import { usePathname } from "next/navigation"
import clsx from "clsx"

export default function Navbar() {
  const pathname = usePathname() || "/"

  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Josef
          </Link>

          <div className="flex items-center gap-4">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm hover:text-black transition",
                    isActive ? "text-black font-semibold" : "text-gray-600"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              )
            })}

            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  )
}
