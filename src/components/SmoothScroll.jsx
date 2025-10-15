import { useEffect } from 'react'

const SmoothScroll = () => {
  useEffect(() => {
    // Smooth scroll on anchor links
    const handleSmoothScroll = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return

      const href = target.getAttribute('href')
      if (!href || href === '#') return

      e.preventDefault()
      
      const element = document.querySelector(href)
      if (!element) return

      const headerOffset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }

    // Add parallax effect on scroll
    const handleParallax = () => {
      const scrolled = window.pageYOffset
      const parallaxElements = document.querySelectorAll('[data-parallax]')
      
      parallaxElements.forEach(element => {
        const speed = element.dataset.parallax || 0.5
        const yPos = -(scrolled * speed)
        element.style.transform = `translateY(${yPos}px)`
      })
    }

    // Lazy fade-in on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    // Observe all sections
    const sections = document.querySelectorAll('section')
    sections.forEach(section => {
      section.style.opacity = '0'
      section.style.transform = 'translateY(30px)'
      section.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out'
      observer.observe(section)
    })

    document.addEventListener('click', handleSmoothScroll)
    window.addEventListener('scroll', handleParallax, { passive: true })

    return () => {
      document.removeEventListener('click', handleSmoothScroll)
      window.removeEventListener('scroll', handleParallax)
      observer.disconnect()
    }
  }, [])

  return null
}

export default SmoothScroll

