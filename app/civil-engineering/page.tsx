"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { previousExperienceData } from "@/lib/experienceData";

export default function CivilEngineeringPage() {
  return (
    <>
      <ScrollToAnchor />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <section id="previous-experience" className="section-block">
            <div className="section-header-body">
              <h3>civil engineering</h3>
            </div>

            <div className="experience-grid-container">
              {previousExperienceData.map((experience) => {
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
          </section>
        </main>
      </div>
    </>
  );
}
