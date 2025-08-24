import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-item">
        <div className="project-header">
          <h3>Portfolio Website</h3>
          <a href="https://github.com/elvisThai/my-portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
        <p>
          A modern, responsive portfolio website built with React and Framer Motion. 
          Features smooth animations, dark theme, and mobile-first design principles.
          The site showcases my skills in frontend development and demonstrates my ability 
          to create engaging user experiences with modern web technologies.
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
