"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { drinksData, Drink } from "@/lib/projectsData";

export default function CafePage() {
  const [selectedDrink, setSelectedDrink] = useState<Drink | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleDrinkClick = (drinkId: number) => {
    const drink = drinksData.find((d) => d.id === drinkId);
    if (drink) {
      setSelectedDrink(drink);
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setTimeout(() => setSelectedDrink(null), 300);
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPopup) {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [showPopup]);

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

            <p style={{ marginBottom: '2rem' }}>
              Here's what I've been making lately—drinks and desserts for friends, family, and anyone who stops by. It's my way of sharing what I love about culinary creativity.
            </p>

            {/* Japanese-style Menu */}
            <div className="japanese-menu">
              <div className="menu-section">
                <h4 className="menu-category">beverages</h4>
                <div className="menu-items">
                  <div
                    className="menu-item clickable"
                    onClick={() => handleDrinkClick(1)}
                  >
                    <div className="menu-item-details">
                      <span className="menu-item-name">iced matcha latte</span>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">侘寂</span>
                    </div>
                    <p className="menu-item-description">
                      ceremonial-grade matcha, oat milk
                    </p>
                  </div>

                  <div
                    className="menu-item clickable"
                    onClick={() => handleDrinkClick(2)}
                  >
                    <div className="menu-item-details">
                      <span className="menu-item-name">matcha strawberry latte</span>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">幽玄</span>
                    </div>
                    <p className="menu-item-description">
                      house-made strawberry puree, matcha, milk
                    </p>
                  </div>

                  <div
                    className="menu-item clickable"
                    onClick={() => handleDrinkClick(3)}
                  >
                    <div className="menu-item-details">
                      <span className="menu-item-name">coconut cloud matcha</span>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">間</span>
                    </div>
                    <p className="menu-item-description">
                      matcha, coconut foam, oat milk
                    </p>
                  </div>

                  <div
                    className="menu-item clickable"
                    onClick={() => handleDrinkClick(4)}
                  >
                    <div className="menu-item-details">
                      <span className="menu-item-name">earl grey matcha</span>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">物の哀れ</span>
                    </div>
                    <p className="menu-item-description">
                      earl grey tea, ceremonial matcha, milk
                    </p>
                  </div>
                </div>
              </div>

              <div className="menu-divider"></div>

              <div className="menu-section">
                <h4 className="menu-category">sweets</h4>
                <div className="menu-items">
                  <div
                    className="menu-item clickable"
                    onClick={() => handleDrinkClick(5)}
                  >
                    <div className="menu-item-details">
                      <span className="menu-item-name">matcha tiramisu</span>
                      <span className="menu-item-dots"></span>
                      <span className="menu-item-price">風雅</span>
                    </div>
                    <p className="menu-item-description">
                      mascarpone cream, matcha ladyfingers, matcha sugar
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Drink Popup */}
            {selectedDrink && (
              <div
                className={`drink-popup-overlay ${showPopup ? "show" : ""}`}
                onClick={closePopup}
              >
                <div
                  className="drink-popup-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="close-popup-btn"
                    onClick={closePopup}
                    aria-label="Close popup"
                  >
                    ×
                  </button>
                  <img
                    src={selectedDrink.image}
                    alt={selectedDrink.title}
                    className="drink-popup-image"
                  />
                  <div className="drink-popup-details">
                    <h3 className="drink-popup-title">{selectedDrink.title}</h3>
                    <p className="drink-popup-description">
                      {selectedDrink.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
