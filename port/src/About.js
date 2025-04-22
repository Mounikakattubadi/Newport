import React from 'react';
import './About.css';
import mouniImg from './images/mouni.jpg';

const About = () => {
  return (
    <div className="about-section">
      <div className="container">
        <div className="row align-items-center flex-md-row flex-column-reverse">
          {/* Text on the left */}
          <div className="col-12 col-md-6 text-md-start text-center">
            <span className="tagline">ABOUT ME</span>
            <h2 className="heading">Why hire me for your next project?</h2>
            <p className="description">
              I'm a MERN Stack Developer with a strong foundation in full-stack development, skilled in both UI/UX design and scalable backend logic.
              Whether it's building sleek front-ends or powerful backends with Node.js and MongoDB, I thrive on creating meaningful digital experiences.
            </p>
            <button className="btn-custom">View Portfolio</button>
          </div>

          {/* Image on the right */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img src={mouniImg} alt="Mounika" className="about-img img-fluid rounded-4 shadow" />
          </div>
        </div>

        {/* SERVICES TITLE */}
        <div className="text-center my-5">
          <span className="tagline">MY SERVICES</span>
          <h2 className="heading">My Provided Features</h2>
        </div>

        {/* SERVICES CARDS */}
        <div className="row justify-content-center g-4">
          <div className="col-md-4">
            <div className="service-card">
              <i className="bi bi-code-slash service-icon"></i>
              <h5>Web Development</h5>
              <p>
                Building modern websites using React, Node, MongoDB & Express with clean, customizable code.
              </p>
              <a href="#" className="btn-custom-sm">See More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card highlighted">
              <i className="bi bi-pencil service-icon"></i>
              <h5>UI/UX Design</h5>
              <p>
                Designing intuitive and visually pleasing interfaces with attention to usability and responsiveness.
              </p>
              <a href="#" className="btn-custom-sm">See More</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-card">
              <i className="bi bi-wordpress service-icon"></i>
              <h5>CMS Integration</h5>
              <p>
                Working knowledge of CMS platforms like WordPress for content-heavy projects or blog integration.
              </p>
              <a href="#" className="btn-custom-sm">See More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
