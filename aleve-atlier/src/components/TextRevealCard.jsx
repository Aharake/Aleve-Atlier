import React, { useEffect, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'

const cls = (...parts) => parts.filter(Boolean).join(' ')

export const TextRevealCard = ({ text, revealText, children, className }) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef(null)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect()
      setLeft(rect.left)
      setLocalWidth(rect.width)
    }
  }, [])

  const mouseMoveHandler = (event) => {
    event.preventDefault()
    const { clientX } = event
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  const mouseLeaveHandler = () => {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }

  const mouseEnterHandler = () => {
    setIsMouseOver(true)
  }

  const touchMoveHandler = (event) => {
    event.preventDefault()
    const clientX = event.touches[0].clientX
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cls('text-reveal-card', className)}
    >
      {children}

      <div className="text-reveal-viewport">
        <motion.div
          style={{ width: '100%' }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="text-reveal-mask"
        >
          <p className="text-reveal-text text-reveal-text-bright">{revealText}</p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="text-reveal-divider"
        ></motion.div>

        <div className="text-reveal-stars">
          <p className="text-reveal-text">{text}</p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  )
}

export const TextRevealCardTitle = ({ children, className }) => {
  return <h2 className={cls('text-reveal-title', className)}>{children}</h2>
}

export const TextRevealCardDescription = ({ children, className }) => {
  return <p className={cls('text-reveal-desc', className)}>{children}</p>
}

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2
  const randomOpacity = () => Math.random()
  const random = () => Math.random()
  return (
    <div className="text-reveal-stars-layer">
      {Array.from({ length: 80 }).map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="text-reveal-star"
        ></motion.span>
      ))}
    </div>
  )
}

export const MemoizedStars = memo(Stars)
