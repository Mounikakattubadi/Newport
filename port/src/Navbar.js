import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Navigation.css";
import { FaTwitter, FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"; // Added FaEnvelope for Gmail

const Navigation = () => {
  const location = useLocation();
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className="navbar">
      {/* Make the title clickable using Link */}
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span role="img" aria-label="sparkle">✨</span> Mounika's Portfolio
        </Link>
      </div>

      {/* Mobile menu toggle */}
      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar" /><div className="bar" /><div className="bar" />
      </div>

      {/* Social media icons */}
      <div className={`nav-items ${showMobileMenu ? "active" : ""}`}>
        <a href="https://github.com/MounikaKattubadi" className="nav-icon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351" className="nav-icon" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        {/* Gmail link */}
        <a href="mailto:mounikakattubadi94@gmail.com" className="nav-icon">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
