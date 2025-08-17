import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, 
  FaJava, FaGitAlt, FaDocker, FaAws 
} from 'react-icons/fa';
import { SiMongodb, SiExpress, SiPostgresql, SiTypescript } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", icon: <FaJs />, level: 85, color: "#f7df1e" },
        { name: "Python", icon: <FaPython />, level: 80, color: "#3776ab" },
        { name: "Java", icon: <FaJava />, level: 75, color: "#007396" },
        { name: "TypeScript", icon: <SiTypescript />, level: 70, color: "#3178c6" }
      ]
    },
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 />, level: 90, color: "#e34f26" },
        { name: "CSS3", icon: <FaCss3Alt />, level: 85, color: "#1572b6" },
        { name: "React", icon: <FaReact />, level: 80, color: "#61dafb" }
      ]
    },
    {
      title: "Backend & Databases",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 75, color: "#339933" },
        { name: "Express.js", icon: <SiExpress />, level: 70, color: "#000000" },
        { name: "MongoDB", icon: <SiMongodb />, level: 65, color: "#47a248" },
        { name: "PostgreSQL", icon: <SiPostgresql />, level: 60, color: "#336791" }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Git", icon: <FaGitAlt />, level: 85, color: "#f05032" },
        { name: "Docker", icon: <FaDocker />, level: 60, color: "#2496ed" },
        { name: "AWS", icon: <FaAws />, level: 55, color: "#ff9900" }
      ]
    }
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Here are the technologies and tools I work with. I'm always learning and expanding my skill set.
          </p>
        </motion.div>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="skill-category"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    className="skill-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="skill-header">
                      <div className="skill-icon" style={{ color: skill.color }}>
                        {skill.icon}
                      </div>
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-progress">
                      <motion.div
                        className="skill-progress-bar"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                        style={{ backgroundColor: skill.color }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="skills-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>
            <strong>Note:</strong> These percentages represent my confidence level with each technology. 
            I'm constantly learning and improving my skills through projects and continuous education.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
