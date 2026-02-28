import { useState, useEffect, useRef } from 'react'
import './AppleCardCarousel.css'

export default function AppleCard({ card, index, children }) {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const cardRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.5 }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [])

  return (
    <div
      ref={cardRef}
      className={`apple-card ${isVisible ? 'visible' : ''}`}
      style={{
        backgroundImage: `url(${card.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'brightness(0.7) contrast(1.1)'
      }}
    >
      <div className="apple-card-overlay">
        <div className="apple-card-content">
          <div className="apple-card-category">{card.category}</div>
          <h3 className="apple-card-title">{card.title}</h3>
          {children && !isMobile && (
            <div className="apple-card-body">
              {children}
            </div>
          )}
          {children && isMobile && (
            <div className="apple-card-body mobile-card-body">
              <p className="mobile-card-motto">Engineered to Elevate.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
