import { useEffect, useRef, useState } from 'react'
import './SleekLineCursor.css'

export default function SleekLineCursor() {
  const cursorRef = useRef(null)
  const lineRef = useRef(null)
  const mousePos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const cursorPos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 })
  const animationFrameRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cursor = cursorRef.current
    const line = lineRef.current
    if (!cursor || !line) return

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const animate = () => {
      // Smooth cursor movement
      cursorPos.current.x += (mousePos.current.x - cursorPos.current.x) * 0.1
      cursorPos.current.y += (mousePos.current.y - cursorPos.current.y) * 0.1

      cursor.style.left = `${cursorPos.current.x}px`
      cursor.style.top = `${cursorPos.current.y}px`

      // Update line from cursor to mouse
      const dx = mousePos.current.x - cursorPos.current.x
      const dy = mousePos.current.y - cursorPos.current.y
      const distance = Math.sqrt(dx * dx + dy * dy)
      const angle = Math.atan2(dy, dx) * (180 / Math.PI)

      line.style.width = `${distance}px`
      line.style.left = `${cursorPos.current.x}px`
      line.style.top = `${cursorPos.current.y}px`
      line.style.transform = `rotate(${angle}deg)`
      line.style.transformOrigin = '0 50%'

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor-element"
        style={{
          position: 'fixed',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
          mixBlendMode: 'difference'
        }}
      />
      <div
        ref={lineRef}
        className="cursor-element"
        style={{
          position: 'fixed',
          height: '1px',
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          pointerEvents: 'none',
          zIndex: 9998,
          transformOrigin: '0 50%',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s',
          mixBlendMode: 'difference'
        }}
      />
    </>
  )
}
