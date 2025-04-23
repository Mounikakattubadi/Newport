import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './FloatingNav.css';

const FloatingNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu if clicked outside of the button or the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) &&
          buttonRef.current && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        className="floating-btn"
        onClick={toggleMenu}
      >
        <span>☰</span>
      </button>

      {/* Navigation Menu */}
      {isMenuOpen && (
        <nav ref={menuRef} className="bottom-nav">
          <ul>
            <li className="bubble" style={{ animationDelay: '0s', top: '150px', left: '10%' }}><Link to="/">Home</Link></li>
            <li className="bubble" style={{ animationDelay: '0.1s', top: '80px', left: '30%' }}><Link to="/about">About</Link></li>
            <li className="bubble" style={{ animationDelay: '0.2s', top: '30%', left: '70%' }}><Link to="/experience">Experience</Link></li>
            <li className="bubble" style={{ animationDelay: '0.3s', top: '106%', left: '73%' }}><Link to="/projects">Projects</Link></li>
            <li className="bubble" style={{ animationDelay: '0.4s', top: '106%', left: '35%' }}><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default FloatingNav;
