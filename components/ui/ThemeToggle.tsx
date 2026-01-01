"use client"

import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false)

  useEffect(() => {
    // Init from localStorage or system preference
    try {
      const saved = localStorage.getItem("theme")
      if (saved === "dark") {
        document.documentElement.classList.add("dark")
        setIsDark(true)
        return
      }
      if (saved === "light") {
        document.documentElement.classList.remove("dark")
        setIsDark(false)
        return
      }

      // Fallback to system preference
      const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      if (prefersDark) {
        document.documentElement.classList.add("dark")
        setIsDark(true)
      }
    } catch (e) {
      // ignore (e.g., SSR/localStorage not available)
    }
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    try {
      if (next) {
        document.documentElement.classList.add("dark")
        localStorage.setItem("theme", "dark")
      } else {
        document.documentElement.classList.remove("dark")
        localStorage.setItem("theme", "light")
      }
    } catch (e) {
      // ignore
    }
  }

  return (
    <button
      onClick={toggle}
      aria-pressed={isDark}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex items-center justify-center rounded-md px-3 py-1 text-sm transition hover:bg-gray-100"
    >
      {isDark ? "☀️" : "🌙"}
    </button>
  )
}
