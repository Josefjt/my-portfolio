export type Project = {
  id: string
  title: string
  slug: string
  summary: string
  role: string
  stack: string[]
  impact?: string
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "FastShop e‑commerce",
    slug: "fastshop",
    summary: "A high-performance e-commerce storefront optimized for conversions and speed.",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    impact: "Reduced TTFB by 40% and increased checkout conversion by 12%"
  },
  {
    id: "p2",
    title: "Pulse — Analytics Dashboard",
    slug: "pulse",
    summary: "Real-time analytics dashboard with customizable charts and team collaboration.",
    role: "Full-stack Engineer",
    stack: ["React", "Node.js", "Postgres", "D3"],
    impact: "Enabled real-time insights for 10k+ daily users"
  },
  {
    id: "p3",
    title: "Nimble Notes (Mobile)",
    slug: "nimble-notes",
    summary: "Cross-platform note-taking app with offline sync and end-to-end encryption.",
    role: "Lead Mobile Engineer",
    stack: ["React Native", "Expo", "SQLite"],
    impact: "Reached 50k downloads in 6 months"
  }
]
