import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import mouniImage from './images/mouni.jpg';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-left">
        <div className="triangle-frame">
          <img src={mouniImage} alt="Mounika" className="profile-img" />
        </div>
      </div>

      <div className="home-right">
        <h2 className="subtitle">I'm a</h2>
        <h1 className="title">Web Dev<span>eloper</span></h1>
        <p className="tagline">Aspiring Software Engineer | MERN Stack Developer</p>
        <p className="description">
          Passionate about crafting intuitive web applications and elegant user experiences.
        </p>
        <div className="button-group">
          <button className="btn btn-light">Get Started</button>
          <Link to="/full-portfolio">
  <button className="btn btn-primary">View Portfolio</button>
</Link>        </div>

      </div>
    </div>
  );
};

export default Home;
