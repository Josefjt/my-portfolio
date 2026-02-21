import { GITHUB_PROFILE_URL } from "@/lib/constants"
import Container from "@/components/ui/Container"

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-slate-800">
      <Container>
        <div className="flex flex-col gap-2 py-6 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between dark:text-slate-300">
          <p>Copyright {new Date().getFullYear()} Josef. All rights reserved.</p>
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noreferrer"
            className="w-fit underline decoration-slate-400 underline-offset-4 hover:decoration-slate-900 dark:hover:decoration-slate-100"
          >
            github.com/Josefjt
          </a>
        </div>
      </Container>
    </footer>
  )
}
