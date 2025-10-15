import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaHeart, FaCode } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/umairehsan6', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/umair-ehsan-dev/', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/umairehsan6/', label: 'Instagram' },
    { icon: FaEnvelope, href: 'mailto:umairehsan59@gmail.com', label: 'Email' }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (href) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Social Links */}
          <div className="footer-social">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="footer-bottom">
            <p className="copyright">
              © {currentYear} Mian Umair Ehsan · Built with <FaHeart className="heart" /> & <FaCode className="code-icon" />
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
