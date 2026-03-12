import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    heading: "Introduction",
    items: [
      {
        title: "Introduction",
        href: "/",
      },
      {
        title: "How to Start",
        href: "/how-to-start",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Starters",
    href: "/starters",
    heading: "Development",
    items: [
      {
        title: "Templates Overview",
        href: "/",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Agent Skills",
    href: "/agent-skills",
    heading: "Power Pill",
    items: [
      {
        title: "Overview",
        href: "/",
      },
      {
        title: "Quick Start",
        href: "/quick-start",
      },
      {
        title: "Available Skills",
        href: "/available-skills",
      },
    ],
  },
  {
    spacer: true,
  },
  {
    title: "Community",
    href: "/community",
    items: [
      {
        title: "Contributing",
        href: "/contributing",
      },
    ],
  },
]
