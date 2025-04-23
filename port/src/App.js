import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);

    // Adjust padding to simulate pushing content when menu opens (if needed)
    document.body.style.paddingTop = !showMobileMenu ? "200px" : "0";
  };

  return (
    <Router>
      <div className="page-container">
        <Navigation toggleMobileMenu={toggleMobileMenu} showMobileMenu={showMobileMenu} />

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
