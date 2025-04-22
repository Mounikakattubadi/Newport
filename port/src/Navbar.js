import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);
  const toggleAboutDropdown = () => setShowAboutDropdown((prev) => !prev);
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <span role="img" aria-label="sparkle">✨</span> Mounika's Portfolio
      </div>

      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar" /><div className="bar" /><div className="bar" />
      </div>

      <div className={`nav-items ${showMobileMenu ? "active" : ""}`}>
        <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>Home</Link>

        <div
          className={`nav-link dropdown ${isActive("/about") || isActive("/skills") ? "active" : ""}`}
          onMouseEnter={() => !showMobileMenu && setShowAboutDropdown(true)}
          onMouseLeave={() => !showMobileMenu && setShowAboutDropdown(false)}
          onClick={toggleAboutDropdown}
        >
          About <span className="arrow">{showAboutDropdown ? "▲" : "▼"}</span>
          {showAboutDropdown && (
            <div className="dropdown-menu">
              <Link to="/about" onClick={() => setShowMobileMenu(false)}>Education</Link>
              <Link to="/skills" onClick={() => setShowMobileMenu(false)}>Skillset</Link>
            </div>
          )}
        </div>

        <Link to="/experience" className={`nav-link ${isActive("/experience") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>Experience</Link>
        <Link to="/projects" className={`nav-link ${isActive("/projects") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>Projects</Link>
        <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={() => setShowMobileMenu(false)}>Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;
