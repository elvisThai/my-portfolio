import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-item">
        <div className="project-header">
          <h3>Coming soon..</h3>
          <a href="https://github.com/elvisthai" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
        <p>
       
        </p>
        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Framer Motion</span>
          <span className="tech-tag">CSS3</span>
          <span className="tech-tag">JavaScript</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
