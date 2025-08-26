import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope} from 'react-icons/fa';
import Skills from './Skills';
import Contact from './Contact';
import Experience from './Experience';
import Projects from './Projects';
import './Portfolio.css';

const Portfolio = () => {
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
      
      const sections = ['about', 'experience', 'projects', 'skills', 'contact'];
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
          <motion.div 
            className="name-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Elvis Thai
            </motion.h1>
            <motion.h2 
              className="title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Computer Science Student
            </motion.h2>
            <motion.p 
              className="bio"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              I love building, learning, and solving problems on and off the bouldering wall :D 
            </motion.p>
          </motion.div>

          <motion.nav 
            className="sidebar-nav"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a 
              href="#about" 
              className={`nav-item ${activeSection === 'about' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick('about', e)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              ABOUT
            </motion.a>
            <motion.a 
              href="#experience" 
              className={`nav-item ${activeSection === 'experience' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick('experience', e)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EXPERIENCE
            </motion.a>
            <motion.a 
              href="#projects" 
              className={`nav-item ${activeSection === 'projects' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick('projects', e)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              PROJECTS
            </motion.a>
            <motion.a 
              href="#skills" 
              className={`nav-item ${activeSection === 'skills' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick('skills', e)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.8 }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              SKILLS
            </motion.a>
            <motion.a 
              href="#contact" 
              className={`nav-item ${activeSection === 'contact' ? 'active' : ''}`} 
              onClick={(e) => handleNavClick('contact', e)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 2.0 }}
              whileHover={{ x: 10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              CONTACT
            </motion.a>
          </motion.nav>

          <motion.div 
            className="social-links"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2.4 + index * 0.1 }}
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
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
              AI, and data. Outside of school and coding, I enjoy bouldering indoors (and occasionally outdoors..) 
              and playing video games like Valorant, where I rank in the top 0.1% of players😎.
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
            <Experience />
          </motion.div>
        </section>

        <section id="projects" className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Projects />
          </motion.div>
        </section>

        <section id="skills" className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Skills />
          </motion.div>
        </section>

        <section id="contact" className="content-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Contact />
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;
