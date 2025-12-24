import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"

export default function Navbar() {
  return (
    <header className="border-b">
      <nav className="mx-auto max-w-5xl px-6 py-4 flex justify-between">
        <Link href="/" className="font-semibold text-lg">
          Josef
        </Link>

        <div className="flex gap-6">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-gray-600 hover:text-black transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
