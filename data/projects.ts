export interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  demoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Resume & CV Assistant",
    description:
      "Helps users generate, customize, and manage resumes using Large Language Models.",
    technologies: ["Large Language Models", "AI", "Python"],
    image: "/projects/ai-resume-cv-assistant.png",
  },
  {
    title: "PDF Q&A Assistant",
    description:
      "Enables interactive question-answering over PDF documents using advanced language models and vector embeddings.",
    technologies: ["Python", "LLMs", "Vector Embeddings", "RAG"],
    image: "/projects/pdf-qa-assistant.png",
    githubUrl: "https://github.com/Neha-Pandey12/Chatbot_with_pdf",
  },
];



