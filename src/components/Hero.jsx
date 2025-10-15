import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaDownload, FaCode, FaRocket } from 'react-icons/fa'
import Tilt from 'react-parallax-tilt'
import './Hero.css'
import CVFile from '../assets/Umair-ehsan-web-dev.pdf'

const Hero = () => {
  const [currentText, setCurrentText] = useState(0)
  
  const roles = [
    'Django Developer',
    'React Developer', 
    'Full-Stack Developer',
    'Software Engineer',
    'Building Scalable Web Apps'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: 'easeInOut'
      }
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Hi, I'm <span className="gradient-text">Mian Umair Ehsan</span>
            </motion.h1>
            
            <motion.div 
              className="role-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <span className="role-prefix">I'm </span>
              <motion.span
                key={currentText}
                className="role-text"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {roles[currentText]}
              </motion.span>
            </motion.div>
            
            <motion.p 
              className="hero-description"
              variants={itemVariants}
            >
              Fast. Scalable. Results.
            </motion.p>
            
            <motion.div 
              className="hero-buttons"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <FaRocket />
                Get In Touch
              </motion.a>
              
              <motion.a
                href={CVFile}
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                download="Umair-Ehsan-CV.pdf"
              >
                <FaDownload />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hero-visual"
            variants={itemVariants}
          >
            <Tilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
            >
              <div className="hero-image-container">
                <div className="hero-image">
                  <div className="code-window">
                    <div className="window-header">
                      <div className="window-controls">
                        <span className="control red"></span>
                        <span className="control yellow"></span>
                        <span className="control green"></span>
                      </div>
                      <div className="window-title">portfolio.py</div>
                    </div>
                    <div className="code-content">
                      <div className="code-line">
                        <span className="keyword">class</span> <span className="class-name">Developer</span>:
                      </div>
                      <div className="code-line indent">
                        <span className="keyword">def</span> <span className="function-name">__init__</span>(<span className="self">self</span>):
                      </div>
                      <div className="code-line indent-2">
                        <span className="self">self</span>.name = <span className="string">"Mian Umair Ehsan"</span>
                      </div>
                      <div className="code-line indent-2">
                        <span className="self">self</span>.skills = [<span className="string">"Django"</span>, <span className="string">"React"</span>]
                      </div>
                      <div className="code-line indent-2">
                        <span className="self">self</span>.passion = <span className="string">"Creating amazing apps"</span>
                      </div>
                    </div>
                  </div>
                  
                  <motion.div 
                    className="floating-elements"
                    variants={floatingVariants}
                    animate="float"
                  >
                    <div className="floating-icon icon-1">
                      <FaCode />
                    </div>
                    <div className="floating-icon icon-2">
                      <FaRocket />
                    </div>
                    <div className="floating-icon icon-3">
                      <FaGithub />
                    </div>
                  </motion.div>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="scroll-indicator"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="scroll-arrow"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ↓
          </motion.div>
          <span>Scroll to explore</span>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
