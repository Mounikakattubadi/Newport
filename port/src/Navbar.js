import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom"; 
import "./Navigation.css";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa"; // Removed FaTwitter

const Navigation = () => {
  const location = useLocation();  // If you aren't using location, you can remove this line as well.
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
          <span role="img" aria-label="sparkle">✨</span> Mounika's Portfolio
        </Link>
      </div>

      <div className="menu-toggle" onClick={toggleMobileMenu}>
        <div className="bar" /><div className="bar" /><div className="bar" />
      </div>

      <div className={`nav-items ${showMobileMenu ? "active" : ""}`}>
        <a href="https://github.com/MounikaKattubadi" className="nav-icon" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351" className="nav-icon" target="_blank" rel="noreferrer">
          <FaLinkedinIn />
        </a>
        <a href="mailto:mounikakattubadi94@gmail.com" className="nav-icon">
          <FaEnvelope />
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
