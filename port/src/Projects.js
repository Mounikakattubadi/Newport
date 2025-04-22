import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [featuresOpen, setFeaturesOpen] = useState({});
  const [techOpen, setTechOpen] = useState({});

  const toggleSection = (id, type) => {
    if (type === 'features') {
      setFeaturesOpen((prev) => ({ ...prev, [id]: !prev[id] }));
    } else {
      setTechOpen((prev) => ({ ...prev, [id]: !prev[id] }));
    }
  };

  const projects = [
    {
      id: 'rubberScrapMart',
      name: 'RubberScrapMart',
      link: 'https://www.vikahecotech.com/',
      description: 'A full-stack e-commerce marketplace for rubber scrap.',
      features: ['Automated emails and invoice generation', 'UI/UX with Figma', 'Deployed on Hostinger'],
      technologies: ['MERN Stack', 'Nodemailer', 'pdfkit'],
    },
    {
      id: 'vikahEcotech',
      name: 'Vikah Ecotech Web Platform',
      link: 'https://rubberscrapmart.com/',
      description: 'Website for Vikah Ecotech with enquiry system and product catalog.',
      features: ['Custom UI/UX design', 'Optimized UX and performance'],
      technologies: ['MERN Stack'],
    },
    {
      id: 'lgIndustry',
      name: 'LGIndustry Website',
      link: 'https://lgindustry.in/',
      description: 'Web presence for a manufacturing firm with product showcase and client inquiry system.',
      features: ['SEO & speed optimization', 'Fully responsive design', 'Modern UI'],
      technologies: ['MERN Stack', 'React Helmet', 'CSS'],
    },
    {
      id: 'travellingWebsite',
      name: 'Travelling Website',
      link: '',
      description: 'A travel website for booking flights, trains, and buses.',
      features: ['Secure payments', 'Booking management', 'Customer support'],
      technologies: ['HTML, CSS, JS', 'React', 'Node.js'],
    },
    {
      id: 'examCellSystem',
      name: 'Exam Cell System',
      link: '',
      description: 'An SQL-based system to manage student information and marks.',
      features: ['Student info management', 'Marks management'],
      technologies: ['SQL', 'PHP', 'MySQL', 'HTML', 'CSS'],
    },
    {
      id: 'diabetesPrediction',
      name: 'Diabetes Prediction System',
      link: '',
      description: 'A machine learning model to predict diabetes risk.',
      features: ['Python prediction model', 'Data visualization'],
      technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
    },
    {
      id: 'eventManagement',
      name: 'Event Management Platform',
      link: '',
      description: 'A platform to simplify event planning.',
      features: ['Event tools', 'Guest list integration', 'Custom templates'],
      technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    }
  ];

  return (
    <div className="projects-compact">
      <h2 className="compact-title">Projects</h2>
      {projects.map((project) => (
        <div className="compact-project" key={project.id}>
          <h3 className="project-name">
            {project.link ? (
              <a href={project.link} target="_blank" rel="noreferrer">{project.name}</a>
            ) : (
              project.name
            )}
          </h3>
          <p className="project-description">{project.description}</p>
          <div className="button-group">
            <button onClick={() => toggleSection(project.id, 'features')}>Features</button>
            <button onClick={() => toggleSection(project.id, 'tech')}>Technologies</button>
          </div>
          {featuresOpen[project.id] && (
            <ul className="info-list">
              {project.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
          )}
          {techOpen[project.id] && (
            <ul className="info-list">
              {project.technologies.map((t, i) => <li key={i}>{t}</li>)}
            </ul>
          )}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Projects;
