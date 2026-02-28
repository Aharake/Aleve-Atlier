import { useState } from "react"
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react"

export default function BackgroundShaders() {
  const [intensity, setIntensity] = useState(1.5)
  const [speed, setSpeed] = useState(1.0)
  const [isInteracting, setIsInteracting] = useState(false)
  const [activeEffect, setActiveEffect] = useState("mesh")

  return (
    <div style={{ width: '100%', height: '100vh', backgroundColor: '#000', position: 'relative', overflow: 'hidden' }}>
      {activeEffect === "mesh" && (
        <MeshGradient
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
          colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
          speed={speed}
          backgroundColor="#000000"
        />
      )}

      {activeEffect === "dots" && (
        <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, backgroundColor: '#000' }}>
          <DotOrbit
            style={{ width: '100%', height: '100%' }}
            dotColor="#333333"
            orbitColor="#1a1a1a"
            speed={speed}
            intensity={intensity}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
            colors={["#000000", "#1a1a1a", "#333333", "#ffffff"]}
            speed={speed * 0.5}
            wireframe="true"
            backgroundColor="#000000"
          />
          <div style={{ width: '100%', height: '100%', position: 'absolute', inset: 0, opacity: 0.6 }}>
            <DotOrbit
              style={{ width: '100%', height: '100%' }}
              dotColor="#333333"
              orbitColor="#1a1a1a"
              speed={speed * 1.5}
              intensity={intensity * 0.8}
            />
          </div>
        </>
      )}

      {/* UI Overlay */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {/* Header */}
        <div style={{ position: 'absolute', top: '2rem', left: '2rem', pointerEvents: 'auto' }}></div>

        {/* Effect Controls */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', pointerEvents: 'auto' }}></div>

        {/* Parameter Controls */}
        <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', pointerEvents: 'auto' }}></div>

        {/* Status indicator */}
        <div style={{ position: 'absolute', top: '2rem', right: '2rem', pointerEvents: 'auto' }}></div>
      </div>

      {/* Lighting overlay effects */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '33%',
            width: '8rem',
            height: '8rem',
            backgroundColor: 'rgba(128, 128, 128, 0.05)',
            borderRadius: '50%',
            filter: 'blur(3rem)',
            animation: `pulse ${3 / speed}s ease-in-out infinite`
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '33%',
            right: '25%',
            width: '6rem',
            height: '6rem',
            backgroundColor: 'rgba(255, 255, 255, 0.02)',
            borderRadius: '50%',
            filter: 'blur(2rem)',
            animation: `pulse ${2 / speed}s ease-in-out infinite`,
            animationDelay: '1s'
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '33%',
            width: '5rem',
            height: '5rem',
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
            borderRadius: '50%',
            filter: 'blur(1rem)',
            animation: `pulse ${4 / speed}s ease-in-out infinite`,
            animationDelay: '0.5s'
          }}
        />
      </div>

      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
        <div style={{ textAlign: 'center', fontFamily: 'monospace', fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.4)', letterSpacing: '0.05em' }}>
          <div>Designed with Precision.</div>
          <div style={{ marginTop: '0.5rem' }}>Built to Perform.</div>
        </div>
      </div>
    </div>
  )
}
