import './ProcessStrip.css'

const steps = [
  { number: '01', title: 'Discover', desc: 'We dig into your goals, users, and competitive landscape.' },
  { number: '02', title: 'Design', desc: 'Brand, layouts, and systems — everything visual, locked in.' },
  { number: '03', title: 'Build', desc: 'Fast, accessible, and ready to scale from day one.' },
  { number: '04', title: 'Ship', desc: 'Deployed, handed off, and running in weeks.' },
]

export default function ProcessStrip() {
  return (
    <div className="process-strip">
      <p className="process-eyebrow">( 03 ) — HOW WE WORK</p>
      <div className="process-steps">
        {steps.map((step) => (
          <div key={step.number} className="process-step">
            <span className="process-num">( {step.number} )</span>
            <h3 className="process-title">{step.title}</h3>
            <p className="process-desc">{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
