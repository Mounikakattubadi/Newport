import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGithub
} from "react-icons/fa";
import { SiMongodb, SiFigma, SiSelenium } from "react-icons/si";
import "./Skills.css";

const Skills = () => {
  return (
    <Container className="skills-container my-5 py-5">
      <Card className="skills-card shadow-lg p-4">
        <Row className="justify-content-center">
          <Col lg={10}>
            <Row>
  

              {/* Right: Skills + Icons */}
              <Col md={4} className="skills-side d-flex flex-column align-items-center">
                <h2 className="section-title">Skillset</h2>
                <div className="skill-list mt-3">
                  <h4 className="text-purple">Programming</h4>
                  <p>HTML • CSS • JavaScript • SQL • MongoDB • Python</p>
                  <p>Concepts: Data Structures and Algorithms</p>
                  <p>Testing: Selenium</p>

                  <h4 className="text-purple">Design</h4>
                  <p>Figma • Canva • Adobe XD</p>

                  <h4 className="text-purple">Frameworks</h4>
                  <p>Bootstrap • React.js • Node.js • jQuery</p>

                  <h4 className="text-purple">Tools/Platforms</h4>
                  <p>Git • GitHub</p>
                </div>

                <div className="tech-icons mt-4">
                  <FaReact className="tech-icon react" />
                  <FaNodeJs className="tech-icon node" />
                  <SiMongodb className="tech-icon mongo" />
                  <FaHtml5 className="tech-icon html" />
                  <FaCss3Alt className="tech-icon css" />
                  <FaJsSquare className="tech-icon js" />
                  <SiFigma className="tech-icon figma" />
                  <FaGithub className="tech-icon github" />
                  <SiSelenium className="tech-icon selenium" />
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default Skills;
