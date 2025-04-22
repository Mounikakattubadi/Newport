import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import Experience from './Experience';
import Skills from './Skills';
import './FullPortfolio.css'; // You can add custom styles for this page here

const FullPortfolio = () => {
  return (
    <div className="full-portfolio">
      <section>
        <Home />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Projects />
      </section>
      <section>
        <Skills />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default FullPortfolio;
