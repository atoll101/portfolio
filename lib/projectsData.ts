export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  images: string[];
  code: string;
}

export const projectsData: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A modern, fully responsive portfolio website built with Next.js 15 and TypeScript. Features App Router for optimized routing, real-time weather integration via OpenWeather API, dark/light theme switching with localStorage persistence, and component-based architecture.",
    technologies: ["Next.js 15", "TypeScript", "App Router", "OpenWeather API"],
    link: "https://www.yamin.com.au",
    images: ["/images/portfolio-1.avif", "/images/portfolio-2.avif"],
    code: `import React from 'react';

function MyComponent() {
  return <div>Hello, World!</div>;
}

export default MyComponent;`,
  },

  {
    id: "tfnsw-timetable",
    title: "TfNSW Realtime Timetable",
    description:
      "A live, realtime transport timetable for Transport for NSW (TfNSW), built using React and Vite, integrating directly with TfNSW APIs to provide up-to-date information.",
    technologies: ["React", "Vite", "TfNSW APIs", "CSS3"],
    link: "https://tfnsw-realtime-timetable.onrender.com/",
    images: [
      "/images/tfnsw-1.avif",
      "/images/tfnsw-2.avif",
      "/images/tfnsw-3.avif",
    ],
    code: ``,
  },

  {
    id: "fibonacci",
    title: "Fibonacci Academy",
    description:
      "A comprehensive online learning platform for NSW Selective and OC Exam preparation. Engineered using WordPress, it integrates custom functionalities with HTML and CSS3 to deliver interactive practice exams and a seamless user experience, mirroring the official test environment.",
    technologies: ["Wordpress", "HTML", "CSS3"],
    link: "https://fibonacci-academy-website.vercel.app/",
    images: ["/images/fibonacci-1.avif", "/images/fibonacci-2.avif"],
    code: `.custom-button {
  background-color: #238879;
  color: white;
}`,
  },
  {
    id: "studioho",
    title: "Studio Ho",
    description:
      "A complete React+Vite solution, including custom CSS, for a lash technician's online presence, featuring a dedicated landing page and integrated booking functionality.",
    technologies: ["React", "Vite", "CSS3"],
    link: "https://www.studioho.com.au",
    images: ["/images/studioho-1.avif", "/images/studioho-2.avif"],
    code: ``,
  },
];

export interface Drink {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const drinksData: Drink[] = [
  {
    id: 1,
    title: "Iced Matcha Latte",
    description:
      "Vibrant green matcha cascades and swirls into chilled, creamy milk. A beautifully smooth and refreshing drink, with a perfect harmony of earthy, slightly sweet notes and cool, creamy flavour.",
    image: "/images/icedmatchalatte.avif",
  },
  {
    id: 2,
    title: "Matcha Strawberry Latte",
    description:
      "Layers of strawberry puree, milk, and ceremonial-grade matcha.",
    image: "/images/matchastrawberry.avif",
  },
  {
    id: 3,
    title: "Coconut Cloud Matcha",
    description:
      "Earthy and vibrant matcha topped with a creamy, cloud-like coconut foam for a smooth and refreshing sip.",
    image: "/images/coconutcloudmatcha.avif",
  },
  {
    id: 4,
    title: "Earl Grey Matcha",
    description:
      "A captivating fusion where earthy matcha meets the fragrant, citrus notes of Earl Grey for a uniquely aromatic and smooth experience.",
    image: "/images/earlgreymatcha.avif",
  },
  {
    id: 5,
    title: "Matcha Tiramisu",
    description:
      "Velvety layers of rich mascarpone cream and soft, matcha-soaked ladyfingers. A dusting of matcha sugar on top slowly melts into the cream, creating an elegant, lightly textured dessert that balances earthy, sweet, and airy notes.",
    image: "/images/matchatiramisu.avif",
  },
];
