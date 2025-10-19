"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WeatherWidget from "./WeatherWidget";

const Sidebar = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const pathname = usePathname();

  useEffect(() => {
    // Update active section based on route or scroll
    if (pathname === "/cafe") {
      setActiveSection("cafe");
      return;
    }

    if (pathname === "/civil-engineering") {
      setActiveSection("civil-engineering");
      return;
    }

    // For home page, observe sections
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    // Handle scroll to top
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setActiveSection("about");
      }
    };

    sections.forEach((section) => observer.observe(section));
    window.addEventListener("scroll", handleScroll);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  const closeMobileNav = () => {
    setMobileNavOpen(false);
  };

  return (
    <header className="sidebar">
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileNavOpen(!isMobileNavOpen)}
        aria-label="Toggle navigation"
        aria-expanded={isMobileNavOpen}
      >
        <i className={isMobileNavOpen ? "fas fa-times" : "fas fa-bars"}></i>
      </button>

      <div className="sidebar-content">
        <Link href="/" onClick={closeMobileNav}>
          <h1>Yamin M</h1>
        </Link>
        <h2>Systems Analyst</h2>

        <nav className={`main-nav ${isMobileNavOpen ? "mobile-nav-open" : ""}`}>
          <ul>
            <li>
              <Link
                href="/#about"
                onClick={closeMobileNav}
                className={activeSection === "about" ? "active" : ""}
              >
                about
              </Link>
            </li>
            <li>
              <Link
                href="/#tech-experience"
                onClick={closeMobileNav}
                className={activeSection === "tech-experience" ? "active" : ""}
              >
                experience
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                onClick={closeMobileNav}
                className={activeSection === "projects" ? "active" : ""}
              >
                personal projects
              </Link>
            </li>
            <li className="nav-divider"></li>
            <li>
              <Link
                href="/cafe"
                onClick={closeMobileNav}
                className={activeSection === "cafe" ? "active" : ""}
              >
                cafe
              </Link>
            </li>
          </ul>
        </nav>

        <div className="sidebar-bottom-content">
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
  );
};

export default Sidebar;
