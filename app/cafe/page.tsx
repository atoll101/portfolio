"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { drinksData } from "@/lib/projectsData";
import { useTheme } from "@/lib/ThemeContext";

export default function CafePage() {
  const { theme, toggleTheme } = useTheme();

  const ThemeToggleButton = () => (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      <i className="fas fa-sun theme-icon sun-icon"></i>
      <i className="fas fa-moon theme-icon moon-icon"></i>
    </button>
  );

  return (
    <>
      <ScrollToAnchor />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="section-block cafe-page">
            <div className="section-header-with-toggle">
              <h3>cafe</h3>
              <div className="theme-toggle-container main-content-toggle">
                <ThemeToggleButton />
              </div>
            </div>

            <div className="drinks-grid-container">
              {drinksData.map((drink) => (
                <div key={drink.id} className="drink-card">
                  <img
                    src={drink.image}
                    alt={drink.title}
                    className="drink-card-image"
                  />
                  <div className="drink-card-content">
                    <h4 className="drink-card-title">{drink.title}</h4>
                    <p className="drink-card-description">{drink.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
