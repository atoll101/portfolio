"use client";

import React from "react";
import type { Project } from "@/lib/projectsData";

interface ProjectPopupProps {
  project: Project | null;
  onClose: () => void;
  isAnimating: boolean;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose, isAnimating }) => {
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
      </div>
    </div>
  );
};

export default ProjectPopup;
