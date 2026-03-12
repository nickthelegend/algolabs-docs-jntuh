import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Introduction",
    href: "",
  },
  {
    title: "Getting Started",
    href: "/getting-started",
    items: [
      {
        title: "Installation",
        href: "/installation",
      },
      {
        title: "Video Tutorial",
        href: "/video",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Agent Skills",
    href: "/agent-skills",
    items: [
      {
        title: "Setup",
        href: "/setup",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Starters",
    href: "/starters",
  },
]
