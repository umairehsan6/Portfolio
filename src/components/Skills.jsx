import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaPython, FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs,
  FaGitAlt, FaDocker, FaAws, FaDatabase, FaServer, FaFlask, FaCode
} from 'react-icons/fa'
import { SiDjango, SiPostgresql, SiMongodb, SiRedis, SiNginx, SiMysql, SiTailwindcss } from 'react-icons/si'
import { useInView } from 'react-intersection-observer'
import './Skills.css'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: FaReact, level: 82, color: '#61DAFB' },
        { name: 'JavaScript', icon: FaJs, level: 79, color: '#F7DF1E' },
        { name: 'HTML5', icon: FaHtml5, level: 86, color: '#E34F26' },
        { name: 'CSS3', icon: FaCss3Alt, level: 84, color: '#1572B6' },
        { name: 'Tailwind CSS', icon: SiTailwindcss, level: 77, color: '#06B6D4' }
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Django', icon: SiDjango, level: 85, color: '#092E20' },
        { name: 'Python', icon: FaPython, level: 81, color: '#3776AB' },
        { name: 'Flask', icon: FaFlask, level: 74, color: '#000000' },
        { name: 'REST APIs', icon: FaServer, level: 83, color: '#FF6B6B' }
      ]
    },
    {
      title: 'Database',
      skills: [
        { name: 'MySQL', icon: SiMysql, level: 80, color: '#4479A1' },
        { name: 'PostgreSQL', icon: SiPostgresql, level: 76, color: '#336791' },
        { name: 'SQLite', icon: FaDatabase, level: 84, color: '#003B57' },
        { name: 'Django ORM', icon: SiDjango, level: 86, color: '#092E20' }
      ]
    },
    {
      title: 'Tools & Deployment',
      skills: [
        { name: 'Git/GitHub', icon: FaGitAlt, level: 82, color: '#F05032' },
        { name: 'Postman', icon: FaServer, level: 78, color: '#FF6C37' },
        { name: 'Render', icon: FaServer, level: 75, color: '#46E3B7' },
        { name: 'Vercel', icon: FaServer, level: 77, color: '#000000' },
        { name: 'VS Code', icon: FaCode, level: 85, color: '#007ACC' }
      ]
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          className="skills-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="skills-header" variants={itemVariants}>
            <h2 className="section-title">
              My <span className="gradient-text">Skills</span>
            </h2>
            <p className="section-description">
              Technologies that power your success.
            </p>
          </motion.div>

          <div className="skills-grid">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                className="skill-category"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="category-title">{category.title}</h3>
                <div className="skills-list">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item"
                      variants={itemVariants}
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: `0 10px 30px ${skill.color}20`
                      }}
                    >
                      <div className="skill-header">
                        <div className="skill-icon" style={{ color: skill.color }}>
                          <skill.icon />
                        </div>
                        <div className="skill-info">
                          <span className="skill-name">{skill.name}</span>
                        </div>
                      </div>
                      <div className="skill-level">{skill.level}%</div>
                      <div className="skill-bar">
                        <motion.div
                          className="skill-progress"
                          style={{ backgroundColor: skill.color }}
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                          transition={{ 
                            duration: 1.5, 
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
                            ease: 'easeOut'
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div className="skills-summary" variants={itemVariants}>
            <div className="summary-badges">
              <div className="tech-badge">
                <span className="badge-icon">⚡</span>
                <span className="badge-text">Lightning Fast</span>
              </div>
              <div className="tech-badge">
                <span className="badge-icon">🚀</span>
                <span className="badge-text">Enterprise Scale</span>
              </div>
              <div className="tech-badge">
                <span className="badge-icon">✨</span>
                <span className="badge-text">Client Success</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
