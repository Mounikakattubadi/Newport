import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navigation from "./Navbar";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Experience from "./Experience";
import Skills from "./Skills";
import FloatingNav from "./FloatingNav";
import FullPortfolio from "./FullPortfolio";

// Scroll to anchors like #skills
const ScrollToHashElement = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return null;
};

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.body.style.paddingTop = !showMobileMenu ? "200px" : "0";
  };

  return (
    <Router>
      <div className="page-container">
        <Navigation toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />
        <ScrollToHashElement />

        <main className="content-wrapper">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/full-portfolio" element={<FullPortfolio />} />
          </Routes>
        </main>

        <Footer />
        <FloatingNav />
      </div>
    </Router>
  );
}

export default App;
