"use client";

import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import ProjectPopup from "@/components/ProjectPopup";
import { projectsData, type Project } from "@/lib/projectsData";
import { techExperienceData } from "@/lib/experienceData";

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
              I'm working in insurance technology, integrating LLM solutions
              into development workflows and improving insurtech offerings,
              while pursuing a{" "}
              <strong>
                <a
                  href="https://www.unsw.edu.au/study/postgraduate/master-of-information-technology"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Masters of IT (AI and Cybersecurity) at UNSW
                </a>
              </strong>
              . I bridge the gap between developers and clients, turning
              technical possibilities into practical solutions.
            </p>
            <p>
              My background spans engineering consulting and{" "}
              <strong>project management</strong> across infrastructure projects
              - water systems, roads, dams, and sustainability initiatives. I'm
              bringing those problem-solving principles from the physical world
              into SaaS and digital spaces. I love the complete lifecycle - from
              scoping and understanding pain points to delivering solutions that
              solve real problems.
            </p>
            <p>
              My approach focuses on aligning the right people,{" "}
              <strong>asking the right questions</strong>, and{" "}
              <strong>building solutions</strong> that actually work. That
              design thinking from my engineering and architecture studies
              shapes how I create digital experiences. Outside work, I spend
              time travelling, experimenting with café-style drinks at home,
              baking, and illustrating.
            </p>
          </section>

          <section id="tech-experience" className="section-block">
            <div className="experience-grid-container">
              {techExperienceData.map((experience) => {
                const CardContent = (
                  <>
                    <div className="experience-card-header">
                      <div>
                        <span className="experience-duration">
                          {experience.duration}
                        </span>
                        <h4 className="experience-position">
                          {experience.position}
                        </h4>
                        <span className="experience-company">
                          {experience.company}
                        </span>
                      </div>
                      <img
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        className="experience-logo"
                      />
                    </div>
                    <p className="experience-description">
                      {experience.description}
                    </p>
                  </>
                );

                return experience.link ? (
                  <a
                    key={experience.id}
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card"
                  >
                    <div className="experience-card-content">{CardContent}</div>
                  </a>
                ) : (
                  <div key={experience.id} className="experience-card">
                    <div className="experience-card-content">{CardContent}</div>
                  </div>
                );
              })}
            </div>
            <div className="section-link-container">
              <Link href="/civil-engineering" className="section-link">
                GO TO MY ENGINEERING EXPERIENCE <span className="section-link-arrow">→</span>
              </Link>
            </div>
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
