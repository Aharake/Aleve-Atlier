import { useState, useEffect } from 'react'
import logoIcon from '../assets/aleveLOGO.jpeg'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setIsScrolled(true)
        setIsVisible(true)
      } else {
        setIsScrolled(false)
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`navbar ${isVisible ? 'visible' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img src={logoIcon} alt="Aleve Atelier" className="navbar-logo-img" />
          <span className="navbar-logo-text">Aleve Atelier</span>
        </div>
        <div className="navbar-links">
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('about')}
          >
            About Us
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('services')}
          >
            Services
          </button>
          <button 
            className="navbar-link" 
            onClick={() => scrollToSection('contact')}
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  )
}
