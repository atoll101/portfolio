export interface SkillCategory {
  id: string;
  category: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "languages",
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL", "HTML5", "CSS3"],
  },
  {
    id: "frameworks",
    category: "Frameworks & Libraries",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Vite",
      "WordPress",
    ],
  },
  {
    id: "tools",
    category: "Tools & Platforms",
    skills: [
      "Git",
      "AWS",
      "Vercel",
      "VS Code",
      "Figma",
      "REST APIs",
    ],
  },
  {
    id: "domains",
    category: "Domain Expertise",
    skills: [
      "Insurance Technology",
      "LLM Integration",
      "AI/ML Solutions",
      "Cybersecurity",
      "Project Management",
      "Infrastructure Engineering",
    ],
  },
];
