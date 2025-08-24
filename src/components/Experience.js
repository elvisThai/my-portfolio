import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-item">
        <div className="experience-header">
          <span className="experience-period">May 2025 — August 2025</span>
          <div className="experience-title">
            <h3>Data Analyst Co-op · Western University</h3>
            <a href="https://uwo.ca" target="_blank" rel="noopener noreferrer" className="company-link">
              <span>Western University</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
        <p>
          Pursuing a comprehensive education in computer science with focus on data structures, algorithms, 
          and software engineering principles. Maintaining a strong academic performance while actively 
          participating in coding competitions and hackathons.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">PowerBi</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">Excel</span>
          <span className="tech-tag">PowerAutomate</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
