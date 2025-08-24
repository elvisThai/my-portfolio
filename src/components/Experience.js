import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-item">
        <div className="experience-header">
          <span className="experience-period">May 2025 — August 2025</span>
          <div className="experience-title">
            <h3>Data Analyst Co-op · Ontario Science Centre</h3>
            <a href="https://www.ontariosciencecentre.ca/" target="_blank" rel="noopener noreferrer" className="company-link">
              <span>Ontario Science Centre</span>
              <span className="arrow">↗</span>
            </a>
          </div>
        </div>
        <p>
        At the Ontario Science Centre, I applied data analysis to support executive and government decision-making. 
        I built quantitative models in Python to evaluate prospective locations, developed accessibility analyses, 
        created Power BI dashboards from cleaned Excel and CSV data to track engagement and exhibits, 
        and optimized SQL queries to improve data retrieval efficiency.
        </p>
        <div className="tech-stack">
          <span className="tech-tag">Power BI</span>
          <span className="tech-tag">Python</span>
          <span className="tech-tag">SQL</span>
          <span className="tech-tag">Excel</span>
          <span className="tech-tag">Power Automate</span>
        </div>
      </div>
    </div>
  );
};

export default Experience;
