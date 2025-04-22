import React from "react";
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
import FullPortfolio from "./FullPortfolio"; // Import the FullPortfolio component

function App() {
  return (
    <Router>
      <Navigation />
      
      {/* FloatingNav is here, it will appear on all pages */}
      <FloatingNav />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/skills" element={<Skills />} />
        
        {/* New Route for Full Portfolio Page */}
        <Route path="/full-portfolio" element={<FullPortfolio />} />
      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
