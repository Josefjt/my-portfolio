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
      "This was initially built entirely leveraging Firebase for login security and handling all data. In this version, I switched it to use local storage for simplified usability.",
    role: "a simplified jira clone",
    stack: ["React 19", "React Router DOM 7", "Tailwind CSS v4", "Vite 6", "localStorage"],
    problem:
      "I wanted a single team workspace with tickets, progress, points, and chat, while keeping the project simple to run and easy to demo without backend setup.",
    solution:
      "Built a fully local app with React 19 and Router 7 protected routes, an AuthContext session layer, and a localStorage data layer (`localDb` + domain services). It supports Kanban status flow, role-based ticket restrictions, automatic points award/removal on Done transitions, admin user controls, and a shared chat stream (last 50 messages).",
    repositoryUrl: "https://github.com/Josefjt/turnquest-dashboard",
    impact:
      "Data is limited to each browser/device.",
  },
]
