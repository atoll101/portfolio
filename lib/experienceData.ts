export interface Experience {
  id: string;
  position: string;
  company: string;
  duration?: string;
  description: string;
  link?: string;
  logo: string; // Path to company logo image
}

export const techExperienceData: Experience[] = [
  {
    id: "appsure-ba",
    position: "Systems Analyst",
    company: "Appsure",
    duration: "CURRENT",
    description:
      "Integrating LLM solutions into development workflows and bridging communication between technical teams and clients to deliver practical insurtech solutions.",
    link: "https://www.appsure.com.au",
    logo: "/images/logos/appsure.png",
  },
  // Add more tech roles here
];

export const previousExperienceData: Experience[] = [
  {
    id: "design-manager",
    position: "Design Manager",
    company: "Aurecon",
    duration: "Aug 2023 - Jul 2024",
    description:
      "Directed multidisciplinary infrastructure projects across Defence sites. Coordinated stakeholder interfaces, streamlined approval workflows reducing turnaround times by 50%, and managed design delivery across 13 concurrent packages.",
    link: "https://www.aurecongroup.com",
    logo: "/images/logos/aurecon.png",
  },
  {
    id: "civil-engineer",
    position: "Civil Engineer",
    company: "Aurecon",
    duration: "Sep 2022 - Jul 2024",
    description:
      "Coordinated cross-functional project delivery across government and enterprise clients. Managed stakeholder communication, construction phase support, and design coordination for multi-site infrastructure programs across NSW.",
    link: "https://www.aurecongroup.com",
    logo: "/images/logos/aurecon.png",
  },
  {
    id: "wastewater-engineer",
    position: "Wastewater Planning Engineer",
    company: "Aurecon",
    duration: "Sep 2021 - Sep 2022",
    description:
      "Coordinated contractor delivery for Sydney Water's $900M infrastructure program across Greater Sydney. Developed strategic planning frameworks, managed compliance processes, and trained field teams on data collection systems.",
    link: "https://www.aurecongroup.com",
    logo: "/images/logos/aurecon.png",
  },
  {
    id: "sustainability-engineer",
    position: "Sustainability Engineer",
    company: "The Carbon Reduction Institute",
    duration: "Jan 2021 - Sep 2021",
    description:
      "Delivered energy efficiency upgrades across 200+ sites, managing end-to-end project execution. Coordinated procurement, conducted 50+ compliance audits, and optimized delivery workflows to meet sustainability targets.",
    link: "https://noco2.com.au/",
    logo: "/images/logos/noco2.png",
  },
];
