import Link from "next/link"
import { NAV_LINKS } from "@/lib/constants"
import Container from "@/components/ui/Container"
import Button from "@/components/ui/Button"

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            Josef
          </Link>

          <div className="flex items-center gap-4">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-600 hover:text-black transition"
              >
                {link.label}
              </Link>
            ))}

            <Button variant="ghost">Contact</Button>
          </div>
        </nav>
      </Container>
    </header>
  )
}
