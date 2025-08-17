import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaTrophy, FaCertificate, FaUsers } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      type: "internship",
      title: "Software Development Intern",
      company: "Tech Company Inc.",
      duration: "May 2024 - August 2024",
      description: "Worked on developing and maintaining web applications using React and Node.js. Collaborated with senior developers on feature implementation and bug fixes.",
      achievements: [
        "Developed 3 new features that improved user experience by 25%",
        "Reduced application load time by 30% through code optimization",
        "Participated in code reviews and contributed to team documentation"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Git", "Agile"]
    },
    {
      id: 2,
      type: "academic",
      title: "Research Assistant",
      company: "University Computer Science Department",
      duration: "January 2024 - Present",
      description: "Assisting professors with research projects in machine learning and data analysis. Contributing to academic papers and presentations.",
      achievements: [
        "Implemented machine learning algorithms for data classification",
        "Co-authored 2 research papers presented at university conferences",
        "Mentored junior students in programming fundamentals"
      ],
      technologies: ["Python", "TensorFlow", "Pandas", "Jupyter", "LaTeX"]
    },
    {
      id: 3,
      type: "project",
      title: "Open Source Contributor",
      company: "Various Projects",
      duration: "2023 - Present",
      description: "Active contributor to open source projects on GitHub. Focus on web development and developer tools.",
      achievements: [
        "Contributed to 5+ open source projects with 50+ commits",
        "Fixed critical bugs in popular JavaScript libraries",
        "Created documentation and tutorials for new contributors"
      ],
      technologies: ["JavaScript", "React", "Git", "GitHub", "Documentation"]
    }
  ];

  const achievements = [
    {
      icon: <FaTrophy />,
      title: "Dean's List",
      description: "Maintained 3.8+ GPA for 3 consecutive semesters"
    },
    {
      icon: <FaCertificate />,
      title: "Hackathon Winner",
      description: "1st place in University Hackathon 2024"
    },
    {
      icon: <FaUsers />,
      title: "Student Organization Leader",
      description: "Vice President of Computer Science Club"
    },
    {
      icon: <FaBriefcase />,
      title: "Freelance Projects",
      description: "Completed 10+ client projects successfully"
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Experience & Achievements</h2>
          <p className="section-subtitle">
            My professional journey, academic achievements, and contributions to the tech community.
          </p>
        </motion.div>

        <div className="experience-content">
          <motion.div 
            className="experience-timeline"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Professional Experience</h3>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  className={`timeline-item ${exp.type}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h4>{exp.title}</h4>
                      <span className="company">{exp.company}</span>
                      <span className="duration">{exp.duration}</span>
                    </div>
                    <p className="description">{exp.description}</p>
                    <div className="achievements">
                      <h5>Key Achievements:</h5>
                      <ul>
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="technologies">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className="achievements-grid"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>Academic & Personal Achievements</h3>
            <div className="achievements-container">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="achievement-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className="experience-cta"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p>Interested in working together?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
