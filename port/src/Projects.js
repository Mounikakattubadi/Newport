import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  // State to manage the visibility of used technologies and features
  const [showTechnologies, setShowTechnologies] = useState({
    travellingWebsite: false,
    examCellSystem: false,
    diabetesPrediction: false,
    eventManagement: false,
    rubberScrapMart: false,
    vikahEcotech: false,
    lgIndustry: false,
  });

  const [showFeatures, setShowFeatures] = useState({
    rubberScrapMart: false,
    vikahEcotech: false,
    lgIndustry: false,
    travellingWebsite: false,
    examCellSystem: false,
    diabetesPrediction: false,
    eventManagement: false,
  });

  // Toggle visibility of used technologies
  const toggleTechnologies = (project) => {
    setShowTechnologies((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  // Toggle visibility of features
  const toggleFeatures = (project) => {
    setShowFeatures((prevState) => ({
      ...prevState,
      [project]: !prevState[project],
    }));
  };

  return (
    <div className="projects-section py-5">
      <div className="container">

        {/* Industry Projects Section */}
        <h2 className="section-title text-center mb-5">Industry Projects</h2>

        <div className="row g-4">
          {/* Industry Project 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image1.jpg"
                alt="RubberScrapMart"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://www.vikahecotech.com/" target="_blank" rel="noopener noreferrer" className="link-no-style">
                    RubberScrapMart
                  </a>
                </h5>
                <p className="card-text">
                  A full-stack e-commerce marketplace for rubber scrap. Includes product listing, tracking, and dashboards.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('rubberScrapMart')}
                >
                  Features
                </button>
                {showFeatures.rubberScrapMart && (
                  <ul className="mt-2">
                    <li>Automated emails and invoice generation</li>
                    <li>UI/UX designed using Figma</li>
                    <li>Deployed on Hostinger</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('rubberScrapMart')}
                >
                  Used Technologies
                </button>
                {showTechnologies.rubberScrapMart && (
                  <ul className="mt-2">
                    <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                    <li>Automated emails (Nodemailer)</li>
                    <li>Invoice generation (pdfkit or similar)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Industry Project 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image2.jpg"
                alt="Vikah Ecotech Web Platform"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://rubberscrapmart.com/" target="_blank" rel="noopener noreferrer" className="link-no-style">
                    Vikah Ecotech Web Platform
                  </a>
                </h5>
                <p className="card-text">
                  Website for Vikah Ecotech with enquiry system, events module, and product catalog.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('vikahEcotech')}
                >
                  Features
                </button>
                {showFeatures.vikahEcotech && (
                  <ul className="mt-2">
                    <li>Custom UI/UX design</li>
                    <li>Optimized UX and performance</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('vikahEcotech')}
                >
                  Used Technologies
                </button>
                {showTechnologies.vikahEcotech && (
                  <ul className="mt-2">
                    <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Industry Project 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image3.jpg"
                alt="LGIndustry Website"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">
                  <a href="https://lgindustry.in/" target="_blank" rel="noopener noreferrer" className="link-no-style">
                    LGIndustry Website
                  </a>
                </h5>
                <p className="card-text">
                  Web presence for a manufacturing firm with product showcase and client inquiry system.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('lgIndustry')}
                >
                  Features
                </button>
                {showFeatures.lgIndustry && (
                  <ul className="mt-2">
                    <li>SEO & speed optimization</li>
                    <li>Fully responsive design</li>
                    <li>Modern, clean UI</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('lgIndustry')}
                >
                  Used Technologies
                </button>
                {showTechnologies.lgIndustry && (
                  <ul className="mt-2">
                    <li>MERN Stack (MongoDB, Express.js, React, Node.js)</li>
                    <li>SEO Optimized (React Helmet)</li>
                    <li>Fully responsive design (CSS, media queries)</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Academic Projects Section */}
        <h2 className="section-title text-center mb-5 mt-5">Academic Projects</h2>

        <div className="row g-4">
          {/* Academic Project 1 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image4.jpg"
                alt="Travelling Website"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Travelling Website</h5>
                <p className="card-text">
                  A travel website designed for booking tickets for flights, trains, and buses. Users can search, compare prices, and make reservations. It also includes booking management, secure payments, and customer support to enhance the travel planning experience.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('travellingWebsite')}
                >
                  Features
                </button>
                {showFeatures.travellingWebsite && (
                  <ul className="mt-2">
                    <li>Secure payments</li>
                    <li>Booking management system</li>
                    <li>Customer support integration</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('travellingWebsite')}
                >
                  Used Technologies
                </button>
                {showTechnologies.travellingWebsite && (
                  <ul className="mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Academic Project 2 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image5.jpg"
                alt="Exam Cell System"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Exam Cell System</h5>
                <p className="card-text">
                  An SQL-based system developed to manage student information and marks. It streamlines data handling with a user-friendly interface and data validation, reducing administrative workload and enhancing data accuracy.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('examCellSystem')}
                >
                  Features
                </button>
                {showFeatures.examCellSystem && (
                  <ul className="mt-2">
                    <li>Student information management</li>
                    <li>Marks management system</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('examCellSystem')}
                >
                  Used Technologies
                </button>
                {showTechnologies.examCellSystem && (
                  <ul className="mt-2">
                    <li>SQL</li>
                    <li>PHP</li>
                    <li>MySQL</li>
                    <li>HTML</li>
                    <li>CSS</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Academic Project 3 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image6.jpg"
                alt="Diabetes Prediction System"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Diabetes Prediction System</h5>
                <p className="card-text">
                  A Python machine learning model developed to predict diabetes risk using insulin and glucose levels, aiding early diagnosis and improving patient care.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('diabetesPrediction')}
                >
                  Features
                </button>
                {showFeatures.diabetesPrediction && (
                  <ul className="mt-2">
                    <li>Prediction model using Python</li>
                    <li>Data visualization for risk analysis</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('diabetesPrediction')}
                >
                  Used Technologies
                </button>
                {showTechnologies.diabetesPrediction && (
                  <ul className="mt-2">
                    <li>Python</li>
                    <li>Scikit-learn</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Academic Project 4 */}
          <div className="col-md-6 col-lg-4">
            <div className="card project-card h-100 shadow-sm">
              <img
                src="path_to_your_image7.jpg"
                alt="Event Management Platform"
                className="project-image"
              />
              <div className="card-body">
                <h5 className="card-title">Event Management Platform</h5>
                <p className="card-text">
                  A comprehensive web application designed to simplify the process of planning events like weddings, anniversaries, and birthdays.
                </p>
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleFeatures('eventManagement')}
                >
                  Features
                </button>
                {showFeatures.eventManagement && (
                  <ul className="mt-2">
                    <li>Event management tools</li>
                    <li>Guest list integration</li>
                    <li>Customizable event templates</li>
                  </ul>
                )}
                <button
                  className="btn btn-outline-info me-2"
                  onClick={() => toggleTechnologies('eventManagement')}
                >
                  Used Technologies
                </button>
                {showTechnologies.eventManagement && (
                  <ul className="mt-2">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                  </ul>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Projects;
