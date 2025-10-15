import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaRocket, FaUsers, FaLightbulb } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import DigitCounter from './DigitCounter'
import './About.css'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

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

  const stats = [
    { 
      number: 5, 
      suffix: '+', 
      label: 'Projects Completed',
      duration: 2000
    },
    { 
      number: 1, 
      suffix: '+', 
      label: 'Years Experience',
      duration: 1500
    },
    { 
      number: 100, 
      suffix: '%', 
      label: 'Code Quality',
      duration: 2500
    },
    { 
      number: 3.07, 
      decimals: 2,
      label: 'CGPA (4.0 Scale)',
      duration: 3000
    }
  ]

  const features = [
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'Maintainable. Scalable.'
    },
    {
      icon: FaRocket,
      title: 'Performance',
      description: 'Fast. Optimized.'
    },
    {
      icon: FaUsers,
      title: 'Collaboration',
      description: 'Agile. Communicative.'
    },
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description: 'Modern. Creative.'
    }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <h2 className="section-title">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="about-description">
              Delivering scalable web solutions that drive business growth.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="stat-number">
                    <DigitCounter
                      end={stat.number}
                      suffix={stat.suffix}
                      duration={stat.duration}
                      decimals={stat.decimals}
                    />
                  </div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about-features" variants={itemVariants}>
            <div className="features-grid">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="feature-card"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)'
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="feature-icon">
                    <feature.icon />
                  </div>
                  <h3 className="feature-title">{feature.title}</h3>
                  <p className="feature-description">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
