import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaCode, FaPython } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import './Projects.css'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'AEON E-Commerce Website',
      shortName: 'AEON',
      description: 'Secure e-commerce platform with 40% faster performance.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'TailwindCSS', 'Django', 'REST APIs', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/umairehsan6/AEON',
      live: 'https://aeon-neon.vercel.app/',
      features: [
        'JWT Authentication & Role-based access control',
        'Optimized REST APIs for cart, checkout, and products',
        'MySQL schema handling 10K+ products efficiently',
        '40% faster response times',
        'Deployed on Render (backend) and Vercel (frontend)'
      ]
    },
    {
      id: 2,
      title: 'Taskify - Team Management Tool',
      shortName: 'Taskify',
      description: 'Real-time collaboration platform boosting team productivity.',
      image: '/api/placeholder/600/400',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Django', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/umairehsan6/Taskify',
      live: '#',
      features: [
        'Role-Based Access (Admin, Manager, Team Lead, Employee)',
        'OTP Verification & Authentication',
        'Real-time task collaboration via WebSocket',
        'Dynamic Time Tracking with auto-pause',
        'Monthly Stats and efficiency scores'
      ]
    },
    {
      id: 3,
      title: 'Face Recognition Attendance System',
      shortName: 'FRS',
      description: 'Automated attendance tracking with ML-powered accuracy.',
      image: '/api/placeholder/600/400',
      technologies: ['Python', 'Tkinter', 'OpenCV', 'MySQL', 'ML Algorithms'],
      category: 'python',
      github: 'https://github.com/umairehsan6/Face-Recoganition-Attendance-System',
      live: '#',
      features: [
        'Admin Login Authentication with OTP Verification',
        'SHA-256 Hashing for secure password storage',
        'ML Algorithms for training and identification',
        'CSV export for attendance sheets',
        'Attendance Statistics and reporting'
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'python', name: 'Python' }
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          ref={ref}
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="projects-header" variants={itemVariants}>
            <h2 className="section-title">
              My <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-description">
              Solutions that deliver results.
            </p>
          </motion.div>

          <motion.div className="project-filters" variants={itemVariants}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`filter-btn ${filter === category.id ? 'active' : ''}`}
                onClick={() => setFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          <motion.div className="projects-grid">
            <AnimatePresence mode="wait">
              {filteredProjects.map(project => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="project-image">
                    <h3 className="project-short-name">{project.shortName}</h3>
                    <div className="project-category">
                      {project.category === 'fullstack' && <FaCode />}
                      {project.category === 'python' && <FaPython />}
                      {project.category}
                    </div>
                  </div>
                  
                  <div className="project-content">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    
                    <div className="project-technologies">
                      {project.technologies.map(tech => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    
                    <div className="project-links">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" title="View on GitHub">
                        <FaGithub /> GitHub
                      </a>
                      {project.live !== '#' && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" title="View Live Demo">
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
