import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './FloatingNav.css';

const FloatingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Floating Button */}
      <button className="floating-btn" onClick={toggleMenu}>
        <span>☰</span>
      </button>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <nav className="bottom-nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default FloatingNav;
