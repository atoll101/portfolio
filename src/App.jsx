import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./Layout";
import HomePage from "./HomePage";
import Cafe from "./Cafe";

const projectsData = [
  {
    id: "portfolio",
    title: "Portfolio",
    description:
      "A personal portfolio site showcasing my skills and projects, built with React and Vite.",
    technologies: ["React", "Vite", "CSS3", "Responsive Design"],
    link: "https://www.yamin.com.au",
    images: ["/images/portfolio-1.avif", "/images/portfolio-2.avif"],
    code: `import React from 'react';

function MyComponent() {
  return <div>Hello, World!</div>;
}

export default MyComponent;`,
  },
  {
    id: "fibonacci",
    title: "Fibonacci Academy",
    description:
      "A comprehensive online learning platform for NSW Selective and OC Exam preparation. Engineered using WordPress, it integrates custom functionalities with HTML and CSS3 to deliver interactive practice exams and a seamless user experience, mirroring the official test environment.",
    technologies: ["Wordpress", "HTML", "CSS3"],
    link: "https://www.fibonacciacademy.com.au",
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

const ProjectPopup = ({ project, onClose, isAnimating }) => {
  if (!project) return null;

  return (
    <div
      className={`project-popup-overlay ${isAnimating ? "show" : ""}`}
      onClick={onClose}
    >
      <div
        className="project-popup-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-popup-btn" onClick={onClose}>
          &times;
        </button>
        <h3>{project.title}</h3>
        {project.link && (
          <h5>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link.replace(/^(https?:\/\/)?(www\.)?/, "")}
            </a>
          </h5>
        )}
        <p className="popup-description">{project.description}</p>
        {project.link && (
          <p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="popup-button-link"
            >
              View Project
            </a>
          </p>
        )}
        <div className="popup-images">
          {project.images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${project.title} illustration ${index + 1}`}
            />
          ))}
        </div>
        <h4>Technologies Used:</h4>
        <ul className="popup-tech-list">
          {project.technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.code && project.code.trim() && (
          <>
            <h4>Code Snippet:</h4>
            <pre className="popup-code-block">
              <code>{project.code}</code>
            </pre>
          </>
        )}
      </div>
    </div>
  );
};

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      if (!localStorage.getItem("themePreferenceUserSet")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("themePreferenceUserSet", "true");
      return newTheme;
    });
  };

  const openPopup = (project) => {
    setSelectedProject(project);
    setShowPopup(true);
    document.body.style.overflow = "hidden";
    setTimeout(() => {
      setIsAnimating(true);
    }, 10);
  };

  const closePopup = () => {
    setIsAnimating(false);
    document.body.style.overflow = "unset";
    setTimeout(() => {
      setShowPopup(false);
      setSelectedProject(null);
    }, 300);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Layout toggleTheme={toggleTheme} theme={theme} />}
        >
          <Route
            index
            element={
              <>
                <HomePage toggleTheme={toggleTheme} theme={theme} />
                <section id="projects" className="section-block">
                  <div className="section-header-body">
                    <h3>/ projects</h3>
                  </div>
                  <div className="projects-grid-container">
                    {projectsData.map((project) => (
                      <div
                        key={project.id}
                        className="project-card"
                        onClick={() => openPopup(project)}
                      >
                        <div className="project-item">
                          <div>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <ul>
                              {project.technologies.map((tech) => (
                                <li key={tech}>{tech}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </>
            }
          />
          <Route
            path="cafe"
            element={<Cafe toggleTheme={toggleTheme} theme={theme} />}
          />
        </Route>
      </Routes>

      {showPopup && (
        <ProjectPopup
          project={selectedProject}
          onClose={closePopup}
          isAnimating={isAnimating}
        />
      )}
    </>
  );
}

export default App;
