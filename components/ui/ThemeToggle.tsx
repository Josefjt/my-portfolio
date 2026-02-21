"use client"

import { useEffect, useState } from "react"

function getInitialThemeIsDark() {
  if (typeof window === "undefined") return false

  try {
    const saved = localStorage.getItem("theme")
    if (saved === "dark") return true
    if (saved === "light") return false
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  } catch {
    return false
  }
}

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(getInitialThemeIsDark)

  useEffect(() => {
    try {
      document.documentElement.classList.toggle("dark", isDark)
      localStorage.setItem("theme", isDark ? "dark" : "light")
    } catch {
      // ignore localStorage/matchMedia failures
    }
  }, [isDark])

  const label = isDark ? "Light mode" : "Dark mode"

  return (
    <button
      onClick={() => setIsDark((current) => !current)}
      aria-pressed={isDark}
      aria-label={label}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-md px-3 py-1 text-sm text-slate-700 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-200 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      {label}
    </button>
  )
}
