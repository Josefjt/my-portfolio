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
      className="inline-flex h-9 w-9 items-center justify-center rounded-md text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-100"
    >
      <span className="sr-only">{label}</span>
      {isDark ? (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2.75v2.5" />
          <path d="M12 18.75v2.5" />
          <path d="M2.75 12h2.5" />
          <path d="M18.75 12h2.5" />
          <path d="m5.46 5.46 1.77 1.77" />
          <path d="m16.77 16.77 1.77 1.77" />
          <path d="m18.54 5.46-1.77 1.77" />
          <path d="m7.23 16.77-1.77 1.77" />
        </svg>
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      )}
    </button>
  )
}
