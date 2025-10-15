import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import './Experience.css'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Django Developer',
      company: 'Freelance',
      location: 'Remote',
      period: 'Aug 2025 – Present',
      type: 'freelance',
      description: 'Delivering custom web solutions for clients worldwide. Specializing in Django backend development, REST APIs, and full-stack applications. Built e-commerce platforms and real-time features.'
    },
    {
      title: 'Software Engineer Intern',
      company: 'Bitstorm Solutions',
      location: 'Gujranwala, Pakistan',
      period: 'Feb 2025 – Aug 2025',
      type: 'internship',
      description: 'Building scalable web applications using Django and React. Implementing RESTful APIs, database design, and user authentication while working with senior developers in an agile environment.'
    },
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'PUJC – University of the Punjab',
      location: 'Jhelum, Pakistan',
      period: '2020 – 2024',
      type: 'education',
      description: 'CGPA: 3.07/4.0. Focused on software engineering and web development. Completed multiple full-stack projects using Django, React, and Python.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          className="experience-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="experience-header" variants={itemVariants}>
            <h2 className="section-title">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <p className="section-description">
              Proven experience delivering scalable solutions and results.
            </p>
          </motion.div>

          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${exp.type}`}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="timeline-marker">
                  <FaBriefcase />
                </div>
                <div className="timeline-content">
                  <div className={`experience-card ${exp.type}-card`}>
                    <div className="card-header">
                      <h3 className="job-title">{exp.title}</h3>
                      <div className="company-info">
                        <span className="company-name">{exp.company}</span>
                        <div className="job-meta">
                          <span className="location">
                            <FaMapMarkerAlt />
                            {exp.location}
                          </span>
                          <span className="period">
                            <FaCalendarAlt />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="job-description">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
