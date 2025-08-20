import React from "react";

const ThemeToggleButton = ({ onClick, theme }) => (
  <button
    onClick={onClick}
    className="theme-toggle-button"
    aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
  >
    <i className="fas fa-sun theme-icon sun-icon"></i>
    <i className="fas fa-moon theme-icon moon-icon"></i>
  </button>
);

function HomePage({ toggleTheme, theme }) {
  return (
    <>
      <section id="about" className="section-block">
        <div className="section-header-with-toggle">
          <h3>about</h3>
          <div className="theme-toggle-container main-content-toggle">
            <ThemeToggleButton onClick={toggleTheme} theme={theme} />
          </div>
        </div>
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
    </>
  );
}

export default HomePage;
