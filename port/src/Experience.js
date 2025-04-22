import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-section py-5">
      <div className="container">
        <h2 className="section-title">Experience</h2>

        <div className="experience-card">
          <h5 className="role-title">VIKAH ECOTECH | Full Stack Web Developer</h5>
          <p className="date-location"><em>Sep 2024 – Current | Hyderabad</em></p>
          <ul className="experience-list">
            <li>Developed MERN web apps to improve business workflow.</li>
            <li>Designed UI with Figma, integrated APIs, and deployed on Hostinger.</li>
            <li>Collaborated in Agile team to build scalable features.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
