export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Data Analysis",
    skills: ["Python", "NumPy", "Pandas", "SQL", "Statistics"],
  },
  {
    title: "Artificial Intelligence & Machine Learning",
    skills: [
      "Generative AI",
      "Agentic AI",
      "Large Language Models (LLMs)",
      "RAG",
      "MCP",
      "Machine Learning (Currently Learning)",
    ],
  },
  {
    title: "Programming Languages",
    skills: ["Python", "Java", "C++", "C"],
  },
  {
    title: "Frameworks & Tools",
    skills: ["Streamlit", "Git", "GitHub"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Office Tools",
    skills: ["Microsoft Word", "Microsoft Excel", "Microsoft PowerPoint"],
  },
];
