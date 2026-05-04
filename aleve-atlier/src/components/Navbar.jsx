import { useState, useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logoName from '../assets/LOGONAME.png'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Work', id: 'portfolio' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])
  return scrolled
}

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const ids = ['portfolio', 'services', 'contact']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver(
      entries => {
        if (window.scrollY < 150) return
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActive(visible.target.id)
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])
  return active
}

function useHideOnScroll(disabled = false) {
  const [visible, setVisible] = useState(true)
  const lastY = useRef(0)
  useEffect(() => {
    if (disabled) { setVisible(true); return }
    const onScroll = () => {
      const y = window.scrollY
      if (y < 200) { setVisible(true); lastY.current = y; return }
      if (y > lastY.current + 8) setVisible(false)
      else if (y < lastY.current) setVisible(true)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [disabled])
  return visible
}

function MenuSheet({ open, onClose, active }) {
  const sheetRef = useRef(null)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    onClose()
  }

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  useEffect(() => {
    if (!open || !sheetRef.current) return
    const focusable = sheetRef.current.querySelectorAll(
      'button, a, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()
    const trap = (e) => {
      if (e.key !== 'Tab') return
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last?.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first?.focus() }
      }
    }
    window.addEventListener('keydown', trap)
    return () => window.removeEventListener('keydown', trap)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          ref={sheetRef}
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          id="primary-menu"
          className="nav-sheet"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.32, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <button className="nav-sheet-close" onClick={onClose} aria-label="Close menu">
            <X size={26} />
          </button>

          <p className="nav-sheet-eyebrow">( MENU )</p>

          <nav className="nav-sheet-links">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.id}
                className={`nav-sheet-link ${active === link.id ? 'is-active' : ''}`}
                onClick={() => scrollTo(link.id)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 + 0.08 }}
              >
                {active === link.id && <span className="nav-sheet-dot" aria-hidden="true" />}
                {link.label}
              </motion.button>
            ))}
          </nav>

          <hr className="nav-sheet-divider" />

          <div className="nav-sheet-secondary">
            <a href="mailto:aliharake04@gmail.com" className="nav-sheet-contact">
              Email
            </a>
            <span className="nav-sheet-sep" aria-hidden="true">·</span>
            <a href="https://wa.me/96171579255" className="nav-sheet-contact" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
            <span className="nav-sheet-sep" aria-hidden="true">·</span>
            <a href="https://instagram.com/aleveatelier" className="nav-sheet-contact" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>

          <button className="nav-sheet-cta" onClick={() => scrollTo('contact')}>
            Start a project →
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const scrolled = useScrolled(24)
  const active = useActiveSection()
  const visible = useHideOnScroll(open)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <div className={`nav-wrapper ${visible ? 'is-visible' : 'is-hidden'}`}>
        <header className={`nav-pill ${scrolled ? 'is-scrolled' : ''}`}>
          <button
            className="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Go to top"
          >
            <img src={logoName} alt="Aleve Atelier" className="nav-logo-name" />
          </button>

          <nav aria-label="Primary" className="nav-links-desktop">
            {NAV_LINKS.map(link => (
              <button
                key={link.id}
                className={`nav-link ${active === link.id ? 'is-active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
                {active === link.id && <span className="nav-link-dot" aria-hidden="true" />}
              </button>
            ))}
          </nav>

          <div className="nav-right">
            <button className="nav-cta" onClick={() => scrollTo('contact')}>
              Start a project <span className="nav-cta-arrow" aria-hidden="true">→</span>
            </button>
            <button
              className="nav-hamburger"
              onClick={() => setOpen(o => !o)}
              aria-expanded={open}
              aria-controls="primary-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              <Menu size={22} />
            </button>
          </div>
        </header>
      </div>

      <MenuSheet open={open} onClose={() => setOpen(false)} active={active} />
    </>
  )
}
