import React from 'react';
import { Link } from 'react-router-dom';
import './Projects.css';

const techStack = [
  { name: "React", type: "Library", icon: "/assets/react.png" },
  { name: "JavaScript", type: "Framework", icon: "/assets/javascript.png" },
  { name: "CSS", type: "CSS", icon: "/assets/css.png" },
  { name: "PHP", type: "Language", icon: "/assets/php.png" },
  { name: "Java", type: "Language", icon: "/assets/java.png" },
  { name: "Python", type: "Language", icon: "/assets/python.png" },
];

function Projects() {
  return (
    <div className="container">
      <div className="header">
        <nav className="navmenu">
          <Link to="/about">About</Link>
          <Link to="/experience">Experience</Link>
          <Link to="/projects">Projects</Link>
        </nav>
      </div>
      <div className="content">
        <div className="techstack">
          <h1>
            My <span className="highlight">Technology</span> Skillset
          </h1>
          <p>These are the technologies I have experience with.</p>
          <div className="tech-grid">
            {techStack.map((tech) => (
              <div className="tech-item" key={tech.name}>
                <img src={tech.icon} alt={tech.name} className="tech-icon" />
                <div className='tech-text'> 
                <h3>{tech.name}</h3>
                <p>{tech.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
      <div className="footer">
        <p>© 2025 Wen Fei. All rights reserved.</p>
        <p>Designed and Developed by Wen Fei</p>
      </div>
    </div>
  );
}

export default Projects;