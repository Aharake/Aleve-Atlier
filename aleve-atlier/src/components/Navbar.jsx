import { useState, useEffect } from 'react'
import logoName from '../assets/LOGONAME.png'
import './Navbar.css'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <nav className={`navbar visible ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={handleLogoClick}>
            <img src={logoName} alt="Aleve Atelier" className="navbar-logo-img" />
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
          <button 
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-overlay" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className="mobile-drawer-content">
          <button 
            className="mobile-drawer-close"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            ×
          </button>
          <div className="mobile-drawer-links">
            <button 
              className="mobile-drawer-link" 
              onClick={() => scrollToSection('about')}
            >
              About Us
            </button>
            <button 
              className="mobile-drawer-link" 
              onClick={() => scrollToSection('services')}
            >
              Services
            </button>
            <button 
              className="mobile-drawer-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
