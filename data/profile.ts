export const profile = {
  name: "Neha Kumari Pandey",
  title: "AI Developer",
  tagline: "Building intelligent applications with Agentic AI, Generative AI, MCP, and modern web technologies.",
  email: "nehapandey23214@gmail.com",
  github: "https://github.com/Neha-Pandey12",
  linkedin: "https://www.linkedin.com/in/neha-pandey-295492384/",
  heroIntro:
    "AI Developer focused on building intelligent applications with Agentic AI, Generative AI, MCP, and modern web technologies.",
  about: [
    "I am an AI Developer passionate about building intelligent applications with Agentic AI, Generative AI, LLMs, MCP, and modern web technologies.",
    "I enjoy exploring new technologies, building practical projects, and continuously improving my skills in AI, Machine Learning, and software development.",
    "My goal is to create meaningful technology solutions that solve real-world problems.",
  ],
} as const;

export interface NavLink {
  id: string;
  label: string;
}

export const navLinks: NavLink[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
