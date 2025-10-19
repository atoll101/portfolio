"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import ProjectPopup from "@/components/ProjectPopup";
import { projectsData, type Project } from "@/lib/projectsData";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const openPopup = (project: Project) => {
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
      <ScrollToAnchor />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <section id="about" className="section-block">
            <p>
              I'm working in insurance technology, integrating LLM solutions into development
              workflows and improving insurtech offerings, while pursuing a Masters of IT
              (AI and Cybersecurity) at UNSW. I bridge the gap between developers and clients,
              turning technical possibilities into practical solutions.
            </p>
            <p>
              My background spans engineering consulting and project management across
              infrastructure projects - water systems, roads, dams, and sustainability
              initiatives. I'm bringing those problem-solving principles from the physical
              world into SaaS and digital spaces. I love the complete lifecycle - from
              scoping and understanding pain points to delivering solutions that solve real problems.
            </p>
            <p>
              My approach focuses on aligning the right people, asking the right questions,
              and building solutions that actually work. That design thinking from my
              engineering and architecture studies shapes how I create digital experiences.
              Outside work, I spend time travelling, experimenting with café-style drinks
              at home, baking, and illustrating.
            </p>
          </section>

          <section id="projects" className="section-block">
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
        </main>
      </div>

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
