import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaDownload, FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram } from 'react-icons/fa'
import './Header.css'
import CVFile from '../assets/Umair-ehsan-web-dev.pdf'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Intersection Observer for active section detection
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    sections.forEach((section) => {
      observer.observe(section)
    })

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  const navItems = [
    { name: 'Home', href: '#home', icon: FaHome },
    { name: 'About', href: '#about', icon: FaUser },
    { name: 'Skills', href: '#skills', icon: FaCode },
    { name: 'Experience', href: '#experience', icon: FaBriefcase },
    { name: 'Projects', href: '#projects', icon: FaProjectDiagram },
    { name: 'Contact', href: '#contact', icon: FaEnvelope }
  ]

  const socialLinks = [
    // { icon: FaGithub, href: 'https://github.com/yourusername', label: 'GitHub' },
    // { icon: FaLinkedin, href: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    // { icon: FaTwitter, href: 'https://twitter.com/yourusername', label: 'Twitter' },
    // { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container">

        <nav className="nav">
          <ul className="nav-list">
            {navItems.map((item, index) => {
              const sectionId = item.href.replace('#', '')
              const isActive = activeSection === sectionId
              
              return (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <button
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={() => scrollToSection(item.href)}
                  >
                    {item.name}
                  </button>
                </motion.li>
              )
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <motion.a
            href={CVFile}
            className="download-cv-btn desktop-cv-btn"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
            download="Umair-Ehsan-CV.pdf"
          >
            <FaDownload />
            <span>Download CV</span>
          </motion.a>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </div>

        <nav className="mobile-nav-badges">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '')
            const isActive = activeSection === sectionId
            
            return (
              <motion.button
                key={item.name}
                className={`mobile-nav-badge ${isActive ? 'active' : ''}`}
                onClick={() => scrollToSection(item.href)}
                title={item.name}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon />
              </motion.button>
            )
          })}
          
          {/* CV button in mobile/tablet view - grouped with navigation badges */}
          <motion.a
            href={CVFile}
            className="mobile-nav-badge mobile-cv-btn"
            title="Download CV"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            download="Umair-Ehsan-CV.pdf"
          >
            <FaDownload />
          </motion.a>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header
