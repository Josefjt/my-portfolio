export type Project = {
  id: string
  title: string
  slug: string
  summary: string
  role: string
  stack: string[]
  problem: string
  solution: string
  repositoryUrl: string
  liveUrl?: string
  impact?: string
}

export const projects: Project[] = [
  {
    id: "p1",
    title: "FastShop E-commerce",
    slug: "fastshop",
    summary: "A high-performance e-commerce storefront optimized for conversions and speed.",
    role: "Frontend Engineer",
    stack: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
    problem:
      "The storefront was slow on mobile, and users were dropping off before reaching checkout.",
    solution:
      "Implemented route-level caching, streamlined product page rendering, and optimized image delivery for faster page loads.",
    repositoryUrl: "https://github.com/Josefjt/fastshop",
    impact: "Reduced TTFB by 40% and increased checkout conversion by 12%",
  },
  {
    id: "p2",
    title: "Pulse Analytics Dashboard",
    slug: "pulse",
    summary: "Real-time analytics dashboard with customizable charts and team collaboration.",
    role: "Full-stack Engineer",
    stack: ["React", "Node.js", "Postgres", "D3"],
    problem:
      "Teams needed faster visibility into live metrics but were relying on delayed, static reports.",
    solution:
      "Built a live data pipeline with websocket updates and modular chart components to support customizable views.",
    repositoryUrl: "https://github.com/Josefjt/pulse-dashboard",
    impact: "Enabled real-time insights for 10k+ daily users",
  },
  {
    id: "p3",
    title: "Nimble Notes (Mobile)",
    slug: "nimble-notes",
    summary: "Cross-platform note-taking app with offline sync and end-to-end encryption.",
    role: "Lead Mobile Engineer",
    stack: ["React Native", "Expo", "SQLite"],
    problem:
      "Users wanted to capture notes offline and trust that sensitive content stayed private.",
    solution:
      "Designed a local-first architecture with encrypted storage and conflict-aware sync for reliable cross-device access.",
    repositoryUrl: "https://github.com/Josefjt/nimble-notes",
    impact: "Reached 50k downloads in 6 months",
  },
]
