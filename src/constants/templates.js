export const NOTION_TEMPLATES = {
  header: {
    badge: "Templates",
    title: "Endless possibilities",
    subtitle:
      "Choose from thousands of free, pre-built setups for work and life, designed by top creators and companies.",
    browseAllCta: {
      label: "Browse all templates",
      href: "#",
    },
  },
  categories: [
    { id: "all", label: "All Templates" },
    { id: "work", label: "Work & Team" },
    { id: "product", label: "Product & Engineering" },
    { id: "design", label: "Design" },
    { id: "personal", label: "Personal" },
  ],
  items: [
    {
      id: "company-wiki",
      category: "work",
      categoryLabel: "Work & Team",
      icon: "🏢",
      title: "Company Wiki",
      description:
        "A central knowledge base for onboarding guides, company policies, and team directories.",
      popularity: "Most Popular",
    },
    {
      id: "product-roadmap",
      category: "product",
      categoryLabel: "Product & Engineering",
      icon: "🚀",
      title: "Product Roadmap & Sprints",
      description:
        "Track upcoming releases, prioritize backlogs, and link sprint tasks directly to specs.",
      popularity: "Trending",
    },
    {
      id: "meeting-notes",
      category: "work",
      categoryLabel: "Work & Team",
      icon: "📝",
      title: "Meeting Notes & Action Items",
      description:
        "Capture discussions, tag attendees, and automatically summarize takeaways with Notion AI.",
      popularity: "Essential",
    },
    {
      id: "design-system",
      category: "design",
      categoryLabel: "Design",
      icon: "🎨",
      title: "Design System & Asset Hub",
      description:
        "Organize UI design tokens, brand palettes, component guidelines, and Figma asset embeds.",
      popularity: "Featured",
    },
    {
      id: "habit-tracker",
      category: "personal",
      categoryLabel: "Personal",
      icon: "🎯",
      title: "Habit Tracker & Weekly Agenda",
      description:
        "Keep track of daily goals, workout routines, reading lists, and reflections in one view.",
      popularity: "Staff Pick",
    },
    {
      id: "okrs-goals",
      category: "product",
      categoryLabel: "Product & Engineering",
      icon: "📊",
      title: "OKRs & Quarterly Goals",
      description:
        "Align company objectives with measurable key results and progress percentage bars.",
      popularity: "Top Rated",
    },
  ],
};

