import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "https://via.placeholder.com/400x250/007bff/ffffff?text=E-Commerce+App",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      github: "https://github.com/yourusername/ecommerce-app",
      live: "https://your-ecommerce-app.vercel.app",
      category: "fullstack"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://via.placeholder.com/400x250/28a745/ffffff?text=Task+Manager",
      technologies: ["React", "Firebase", "Material-UI", "React DnD"],
      github: "https://github.com/yourusername/task-manager",
      live: "https://your-task-manager.vercel.app",
      category: "frontend"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather conditions and forecasts using OpenWeatherMap API with location-based services.",
      image: "https://via.placeholder.com/400x250/ffc107/ffffff?text=Weather+App",
      technologies: ["JavaScript", "HTML5", "CSS3", "OpenWeatherMap API"],
      github: "https://github.com/yourusername/weather-app",
      live: "https://your-weather-app.vercel.app",
      category: "frontend"
    },
    {
      id: 4,
      title: "RESTful API",
      description: "A comprehensive REST API for a blog platform with user authentication, CRUD operations, and data validation.",
      image: "https://via.placeholder.com/400x250/dc3545/ffffff?text=Blog+API",
      technologies: ["Node.js", "Express", "MongoDB", "JWT", "Joi"],
      github: "https://github.com/yourusername/blog-api",
      live: "https://your-blog-api.herokuapp.com",
      category: "backend"
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and modern CSS, featuring smooth animations and professional design.",
      image: "https://via.placeholder.com/400x250/6f42c1/ffffff?text=Portfolio",
      technologies: ["React", "Framer Motion", "CSS3", "Responsive Design"],
      github: "https://github.com/yourusername/portfolio",
      live: "https://your-portfolio.vercel.app",
      category: "frontend"
    },
    {
      id: 6,
      title: "Data Analysis Tool",
      description: "A Python-based data analysis tool that processes CSV files and generates interactive visualizations and reports.",
      image: "https://via.placeholder.com/400x250/17a2b8/ffffff?text=Data+Tool",
      technologies: ["Python", "Pandas", "Matplotlib", "Streamlit"],
      github: "https://github.com/yourusername/data-analysis-tool",
      live: "https://your-data-tool.streamlit.app",
      category: "data"
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'data', label: 'Data Science' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub />
                    </a>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="projects-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p>Want to see more of my work?</p>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            <FaGithub /> View My GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
