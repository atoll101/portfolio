import React, { useState } from "react"; // 1. Import useState
import { Outlet, Link } from "react-router-dom";
import WeatherWidget from "./WeatherWidget";
import ScrollToAnchor from "./ScrollToAnchor";

const Layout = ({ toggleTheme, theme }) => {
  // 2. Add state for the mobile navigation
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  // Function to close the mobile nav, can be passed to link clicks
  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

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
        <header className="sidebar">
          {/* 3. Add the mobile navigation toggle button */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setMobileNavOpen(!isMobileNavOpen)}
            aria-label="Toggle navigation"
            aria-expanded={isMobileNavOpen}
          >
            {/* This switches between the hamburger and a close (X) icon */}
            <i className={isMobileNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>

          <div className="sidebar-content">
            <h1>Yamin M</h1>
            <h2>i like making things</h2>

            {/* 4. Add a class to the nav based on the state */}
            <nav
              className={`main-nav ${isMobileNavOpen ? "mobile-nav-open" : ""}`}
            >
              <ul>
                {/* 5. Add onClick to each link to close the menu */}
                <li>
                  <Link to="/#about" onClick={closeMobileNav}>
                    / about
                  </Link>
                </li>
                <li>
                  <Link to="/#projects" onClick={closeMobileNav}>
                    / projects
                  </Link>
                </li>
                <li>
                  <Link to="/cafe" onClick={closeMobileNav}>
                    / cafe
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="sidebar-bottom-content">
              <div className="theme-toggle-container sidebar-toggle">
                <ThemeToggleButton />
              </div>
              <WeatherWidget />
              <div className="social-links">
                <a
                  href="https://github.com/atoll101"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a href="#" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="mailto:reverb-saber.4b@icloud.com" aria-label="Mail">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="main-content">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
