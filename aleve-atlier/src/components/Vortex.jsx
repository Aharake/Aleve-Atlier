import React, { useEffect, useRef } from 'react'
import { createNoise3D } from 'simplex-noise'
import { motion } from 'framer-motion'

const cls = (...parts) => parts.filter(Boolean).join(' ')

export default function Vortex({
  children,
  className,
  containerClassName,
  particleCount = 700,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  backgroundColor = '#000000',
}) {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const particlePropCount = 9
  const particlePropsLength = particleCount * particlePropCount
  const baseTTL = 50
  const rangeTTL = 150
  const rangeHue = 100
  const noiseSteps = 3
  const xOff = 0.00125
  const yOff = 0.00125
  const zOff = 0.0005
  let tick = 0
  const noise3D = createNoise3D()
  let particleProps = new Float32Array(particlePropsLength)
  let center = [0, 0]

  const TAU = 2 * Math.PI
  const rand = (n) => n * Math.random()
  const randRange = (n) => n - rand(2 * n)
  const fadeInOut = (t, m) => {
    const hm = 0.5 * m
    return Math.abs(((t + hm) % m) - hm) / hm
  }
  const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2

  const initParticle = (i, canvas) => {
    let x, y, vx, vy, life, ttl, speed, radius, hue

    x = rand(canvas.width)
    y = center[1] + randRange(rangeY)
    vx = 0
    vy = 0
    life = 0
    ttl = baseTTL + rand(rangeTTL)
    speed = baseSpeed + rand(rangeSpeed)
    radius = baseRadius + rand(rangeRadius)
    hue = baseHue + rand(rangeHue)

    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
  }

  const drawParticle = (x, y, x2, y2, life, ttl, radius, hue, ctx) => {
    ctx.save()
    ctx.lineCap = 'round'
    ctx.lineWidth = radius
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x2, y2)
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
  }

  const checkBounds = (x, y, canvas) =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0

  const updateParticle = (i, canvas, ctx) => {
    const i2 = 1 + i
    const i3 = 2 + i
    const i4 = 3 + i
    const i5 = 4 + i
    const i6 = 5 + i
    const i7 = 6 + i
    const i8 = 7 + i
    const i9 = 8 + i

    let x = particleProps[i]
    let y = particleProps[i2]
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
    let vx = lerp(particleProps[i3], Math.cos(n), 0.5)
    let vy = lerp(particleProps[i4], Math.sin(n), 0.5)
    let life = particleProps[i5]
    const ttl = particleProps[i6]
    const speed = particleProps[i7]
    const x2 = x + vx * speed
    const y2 = y + vy * speed
    const radius = particleProps[i8]
    const hue = particleProps[i9]

    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx)

    life++

    particleProps[i] = x2
    particleProps[i2] = y2
    particleProps[i3] = vx
    particleProps[i4] = vy
    particleProps[i5] = life

    if (checkBounds(x, y, canvas) || life > ttl) initParticle(i, canvas)
  }

  const resize = (canvas, container) => {
    const width = container.clientWidth || 1
    const height = container.clientHeight || 1
    canvas.width = width
    canvas.height = height
    center = [0.5 * width, 0.5 * height]
  }

  const initParticles = (canvas) => {
    tick = 0
    particleProps = new Float32Array(particlePropsLength)
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i, canvas)
    }
  }

  const draw = (canvas, ctx) => {
    tick++
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = backgroundColor
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, canvas, ctx)
    }

    ctx.save()
    ctx.filter = 'blur(8px) brightness(200%)'
    ctx.globalCompositeOperation = 'lighter'
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.filter = 'blur(4px) brightness(200%)'
    ctx.globalCompositeOperation = 'lighter'
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    ctx.save()
    ctx.globalCompositeOperation = 'lighter'
    ctx.drawImage(canvas, 0, 0)
    ctx.restore()

    window.requestAnimationFrame(() => draw(canvas, ctx))
  }

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    resize(canvas, container)
    initParticles(canvas)
    draw(canvas, ctx)

    const handleResize = () => resize(canvas, container)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className={cls('vortex-root', containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className="vortex-canvas"
      >
        <canvas ref={canvasRef}></canvas>
      </motion.div>

      <div className={cls('vortex-foreground', className)}>{children}</div>
    </div>
  )
}
