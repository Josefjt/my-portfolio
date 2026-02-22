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
    title: "TurnQuest Dashboard",
    slug: "turnquest-dashboard",
    summary:
      "A local-first Jira-style team dashboard for Kanban ticket tracking, user points, admin user management, and shared team chat.",
    role: "Full-stack Developer",
    stack: ["React 19", "React Router DOM 7", "Tailwind CSS v4", "Vite 6", "localStorage"],
    problem:
      "I wanted a single team workspace with tickets, progress, points, and chat, while keeping the project simple to run and easy to demo without backend setup.",
    solution:
      "Built a fully local app with React 19 and Router 7 protected routes, an AuthContext session layer, and a localStorage data layer (`localDb` + domain services). It supports Kanban status flow, role-based ticket restrictions, automatic points award/removal on Done transitions, admin user controls, and a shared chat stream (last 50 messages).",
    repositoryUrl: "https://github.com/Josefjt/turnquest-dashboard",
    impact:
      "Delivered a complete browser-only prototype with seeded admin login and no infrastructure required. Current tradeoff: client-side auth only, plaintext local passwords, and data is limited to each browser/device.",
  },
]
