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
          <h3>/ about</h3>
          <div className="theme-toggle-container main-content-toggle">
            <ThemeToggleButton onClick={toggleTheme} theme={theme} />
          </div>
        </div>
        <p>
          I'm the human bridge between developers and clients, helping turn big
          ideas into practical, well-delivered solutions. I started out in civil
          engineering, working across a wide mix of projects including water and
          wastewater systems, roads, dams, fire infrastructure, fuel facilities,
          and sustainability work like carbon accounting.
        </p>
        <p>
          I've worked in all sorts of industries, and what’s stayed consistent
          is my interest in solving problems and connecting people. I studied a
          bit of architecture at uni, and that early interest in design still
          shapes how I think about systems, communication, and user experience.
        </p>
        <p>
          These days, I focus on making sure the right people are aligned, the
          right questions are being asked, and the solutions being built
          actually solve the problem. Outside of work, I spend my time
          travelling, experimenting with café-style drinks at home, baking, and
          illustrating random things.
        </p>
      </section>
    </>
  );
}

export default HomePage;
