import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoName from '../assets/LOGONAME.png'
import logoIcon from '../assets/LOGO.png'
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

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

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    setIsOpen(false)
  }

  const navItems = [
    { label: 'About Us', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact Us', id: 'contact' },
  ]

  return (
    <div className="navbar-wrapper">
      {/* Logo - Left Side (Outside navbar pill) */}
      <motion.div
        className="navbar-logo-container"
        onClick={handleLogoClick}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <img 
          src={logoName} 
          alt="Aleve Atelier" 
          className="navbar-logo-img navbar-logo-full" 
        />
        <img 
          src={logoIcon} 
          alt="Aleve Atelier" 
          className="navbar-logo-img navbar-logo-icon" 
        />
      </motion.div>

      {/* Navigation Pill - Center */}
      <motion.div
        className={`navbar-pill ${isScrolled ? 'scrolled' : ''}`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ 
          y: 0, 
          opacity: 1,
          scale: isScrolled ? 0.98 : 1,
        }}
        transition={{ 
          duration: 0.3,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
      >
        <div className="navbar-pill-content">
          {/* Navigation Links */}
          <nav className="navbar-desktop-nav">
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="navbar-nav-link"
                >
                  {item.label}
                </button>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          <motion.div
            className="navbar-cta-desktop"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="navbar-cta-button"
            >
              Get Started
            </button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="navbar-mobile-button"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <Menu className="navbar-menu-icon" />
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="navbar-mobile-overlay"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="navbar-mobile-close"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close menu"
            >
              <X className="navbar-close-icon" />
            </motion.button>
            <div className="navbar-mobile-links">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: -20 }}
                >
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="navbar-mobile-link"
                  >
                    {item.label}
                  </button>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="navbar-mobile-cta"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="navbar-mobile-cta-button"
                >
                  Get Started
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
