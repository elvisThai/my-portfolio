import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import './About.css';

const About = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isNavigating, setIsNavigating] = useState(false);

  // Social links for clickable icons
  const socialLinks = [
    {
      icon: <FaGithub />,
      name: "GitHub",
      url: "https://github.com/elvisThai",
    },
    {
      icon: <FaLinkedin />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/elvisthai/",
    },
    {
      icon: <FaEnvelope />,
      name: "Email",
      url: "mailto:elvis.thai@outlook.com",
    },
  ];

  // Function to handle scroll and update active section
  useEffect(() => {
    const handleScroll = () => {
      // Don't update if we're in the middle of a navigation click
      if (isNavigating) return;
      
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200; // Offset for better detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isNavigating]);

  // Function to handle navigation clicks
  const handleNavClick = (sectionId, e) => {
    e.preventDefault();
    setActiveSection(sectionId);
    setIsNavigating(true);
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      
      // Re-enable scroll detection after scroll completes
      setTimeout(() => {
        setIsNavigating(false);
      }, 1000);
    }
  };

  return (
    <div className="app-container">
      {/* Fixed Left Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="name-title">
            <h1 className="name">Elvis Thai</h1>
            <h2 className="title">Computer Science Student</h2>
            <p className="bio">
            I love building, learning, and solving problems on and off the bouldering wall :D 
            </p>
          </div>

          <nav className="sidebar-nav">
            <a href="#about" className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} onClick={(e) => handleNavClick('about', e)}>ABOUT</a>
            <a href="#experience" className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`} onClick={(e) => handleNavClick('experience', e)}>EXPERIENCE</a>
            <a href="#projects" className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} onClick={(e) => handleNavClick('projects', e)}>PROJECTS</a>
          </nav>

          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -3 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </aside>

      {/* Scrollable Main Content */}
      <main className="main-content">
        <section id="about" className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2>About</h2>
            <p>
              I'm a Computer Science student at <strong>Western University</strong> passionate about full stack development, 
              AI, and data. Outside of school and coding, I enjoy bouldering (indoors and occasionally outdoors) 
              and playing video games such as Valorant, where I rank in the top 0.1% of players.
            </p>
            <p>
              I've always been fascinated by the intersection of creativity and logic that programming provides. 
              I am currently exploring <strong>cloud technologies</strong> and <strong>DevOps practices</strong> to understand how to deploy 
              and maintain applications at scale.
            </p>
            <p>
              I'm constantly learning and exploring new technologies for fun and love to build projects 
              to help people in different ways. 
            </p>
          </motion.div>
        </section>

        <section id="experience" className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
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
          </motion.div>
        </section>

                 <section id="projects" className="content-section">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
           >
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
           </motion.div>
         </section>
      </main>
    </div>
  );
};

export default About;
