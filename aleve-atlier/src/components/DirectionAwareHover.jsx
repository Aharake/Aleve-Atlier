import { useState, useRef } from 'react'
import './DirectionAwareHover.css'

export default function DirectionAwareHover({ 
  imageUrl, 
  children, 
  className = '',
  imageClass = '',
  childrenClass = ''
}) {
  const [direction, setDirection] = useState(null)
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef(null)
  const lastPosition = useRef({ x: 0, y: 0 })

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setDirection(null)
  }

  const handleMouseMove = (e) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    // Calculate direction based on position relative to center
    const deltaX = x - centerX
    const deltaY = y - centerY

    // Determine direction based on which axis has larger distance from center
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      setDirection(deltaX > 0 ? 'right' : 'left')
    } else {
      setDirection(deltaY > 0 ? 'down' : 'up')
    }

    lastPosition.current = { x, y }
  }

  const handleTouchStart = (e) => {
    setIsHovered(true)
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      const touch = e.touches[0]
      const x = touch.clientX - rect.left
      const y = touch.clientY - rect.top
      
      const centerX = rect.width / 2
      const centerY = rect.height / 2
      
      const deltaX = x - centerX
      const deltaY = y - centerY
      
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        setDirection(deltaX > 0 ? 'right' : 'left')
      } else {
        setDirection(deltaY > 0 ? 'down' : 'up')
      }
      
      lastPosition.current = { x, y }
    }
  }

  const handleTouchEnd = () => {
    setTimeout(() => {
      setIsHovered(false)
      setDirection(null)
    }, 200)
  }

  return (
    <div
      ref={cardRef}
      className={`direction-aware-hover ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="direction-aware-image-container">
        <img
          src={imageUrl}
          alt=""
          className={`direction-aware-image ${imageClass}`}
        />
        {isHovered && (
          <div
            className={`direction-aware-overlay direction-${direction} ${childrenClass}`}
          >
            {children}
          </div>
        )}
      </div>
    </div>
  )
}
