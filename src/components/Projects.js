import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <div className="project-item">
        <div className="project-header">
          <h3>Portfolio Website</h3>
          <a href="https://github.com/elvisThai/portfolio" target="_blank" rel="noopener noreferrer" className="project-link">
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

      <div className="project-item">
        <div className="project-header">
          <h3>Data Analysis Tool</h3>
          <a href="https://github.com/elvisThai/data-tool" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
        <p>
          A Python-based data analysis tool that processes and visualizes large datasets. 
          Implements machine learning algorithms for pattern recognition and predictive analytics.
          The tool provides an intuitive interface for data scientists and analysts to explore 
          complex datasets and generate meaningful insights.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Pandas</span>
          <span className="tech-tag">Matplotlib</span>
          <span className="tech-tag">Scikit-learn</span>
        </div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>E-commerce Platform</h3>
          <a href="https://github.com/elvisThai/ecommerce" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
        <p>
          A full-stack e-commerce platform built with modern web technologies. Features include 
          user authentication, product catalog, shopping cart functionality, and payment processing.
          The platform demonstrates my ability to build complex web applications with both 
          frontend and backend components.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">React</span>
          <span className="tech-tag">Node.js</span>
          <span className="tech-tag">MongoDB</span>
          <span className="tech-tag">Express</span>
          <span className="tech-tag">Stripe</span>
        </div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <h3>Task Management App</h3>
          <a href="https://github.com/elvisThai/task-manager" target="_blank" rel="noopener noreferrer" className="project-link">
            <span>GitHub</span>
            <span className="arrow">↗</span>
          </a>
        </div>
        <p>
          A collaborative task management application that helps teams organize and track their work.
          Features include real-time updates, task assignments, progress tracking, and team collaboration tools.
          Built with a focus on user experience and performance optimization.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">Vue.js</span>
          <span className="tech-tag">Firebase</span>
          <span className="tech-tag">Vuex</span>
          <span className="tech-tag">Vue Router</span>
          <span className="tech-tag">Tailwind CSS</span>
        </div>
      </div>
    </div>
  );
};

export default Projects;
