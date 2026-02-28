import { useState, useRef, useEffect } from 'react'
import './AppleCardCarousel.css'

export default function AppleCardCarousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef(null)
  const childrenArray = Array.isArray(children) ? children : [children]

  useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft
        const cardWidth = carouselRef.current.offsetWidth
        const newIndex = Math.round(scrollLeft / cardWidth)
        setActiveIndex(newIndex)
      }
    }

    const carousel = carouselRef.current
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll)
      return () => carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollToIndex = (index) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.offsetWidth
      carouselRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="apple-carousel-container">
      <div className="apple-carousel" ref={carouselRef}>
        {childrenArray.map((child, index) => (
          <div key={index} className="apple-carousel-item">
            {child}
          </div>
        ))}
      </div>
      <div className="apple-carousel-indicators">
        {childrenArray.map((_, index) => (
          <button
            key={index}
            className={`apple-indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => scrollToIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
