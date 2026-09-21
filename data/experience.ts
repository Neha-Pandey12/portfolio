export interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  current?: boolean;
  highlights: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "AI Product Engineer Intern",
    company: "Nexalaris Tech Pvt. Ltd.",
    duration: "July 2026 – Present",
    current: true,
    highlights: [
      "Working on AI-powered products and applications.",
      "Exploring and building projects related to Agentic AI.",
      "Working with Generative AI and Large Language Models (LLMs).",
      "Exploring Model Context Protocol (MCP).",
      "Contributing to the development and improvement of AI-based products.",
      "Learning and working with modern AI and web technologies.",
    ],
  },
  {
    role: "Quality Assurance Intern",
    company: "Neelgai Technology Pvt. Ltd.",
    duration: "February 23, 2026 – April 23, 2026",
    highlights: [
      "Performed manual testing to identify bugs, errors, and performance issues in applications.",
      "Created and maintained bug reports and testing documentation for issue tracking.",
      "Collaborated and communicated with the development team to report defects and ensure timely bug fixes.",
    ],
  },
];
