"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { drinksData } from "@/lib/projectsData";

export default function CafePage() {
  return (
    <>
      <ScrollToAnchor />
      <div className="app-container">
        <Sidebar />
        <main className="main-content">
          <div className="section-block cafe-page">
            <div className="section-header-body">
              <h3>cafe</h3>
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
