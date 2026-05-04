import { MeshGradient } from "@paper-design/shaders-react"
import './BackgroundShaders.css'

export default function BackgroundShaders() {
  return (
    <div className="bg-shell">
      <MeshGradient
        style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        colors={["#242424", "#1f1f1f", "#2f2f2f", "#f0f0f0"]}
        speed={0.3}
        backgroundColor="#242424"
      />
      <div className="bg-tagline">Engineered to Elevate.</div>
    </div>
  )
}
