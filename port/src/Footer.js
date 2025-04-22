import React from 'react';
import './Footer.css';
import { FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa'; // Removed FaFacebookF

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-top">
        <div className="footer-columns">
          <div className="footer-col">
            <h4 className="footer-brand">Mounika Kattubadi</h4>
            <p>Full-Stack Developer skilled in the MERN stack with a passion for building scalable applications and creating seamless user experiences.</p>
          </div>

          <div className="footer-col-group">
            <div className="footer-col">
              <h6 className="footer-title">Email</h6>
              <p>mounikakattubadi94@gmail.com</p>
            </div>

            <div className="footer-col">
              <h6 className="footer-title">Phone</h6>
              <p>+91 9573530350</p>
            </div>

            <div className="footer-col">
              <h6 className="footer-title">Location</h6>
              <p>Anantapur, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="mb-0">© {new Date().getFullYear()} Mounika Kattubadi. All Rights Reserved.</p>
        <div className="footer-socials">
          <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.linkedin.com/in/mounika-kattubadi-0156b4351" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
          <a href="https://github.com/MounikaKattubadi" target="_blank" rel="noreferrer"><FaGithub /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
