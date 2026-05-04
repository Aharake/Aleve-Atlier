import { useState } from 'react'
import './GetInTouch.css'

export const GetInTouch = () => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    const text = [
      `Hi, I'm ${data.name} (${data.email}).`,
      data.type   ? `Project: ${data.type}` : '',
      data.budget ? `Budget: ${data.budget}` : '',
      data.timeline ? `Timeline: ${data.timeline}` : '',
      data.message ? `\n${data.message}` : '',
    ].filter(Boolean).join('\n')
    window.open(`https://wa.me/96171579255?text=${encodeURIComponent(text)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <div className="contact-wrapper">
      <div className="contact-left">
        <p className="contact-eyebrow">( 05 ) — LET'S TALK</p>
        <h2 className="contact-heading">Let's build<br />something.</h2>
        <p className="contact-sub">
          Tell us about your project. We reply within 1 business day.
        </p>
        <div className="contact-links">
          <a href="mailto:aliharake04@gmail.com" className="contact-link">Email</a>
          <a href="https://wa.me/96171579255" target="_blank" rel="noopener noreferrer" className="contact-link">WhatsApp</a>
          <a href="https://instagram.com/aleveatelier" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
        </div>
      </div>

      <div className="contact-right">
        {submitted ? (
          <div className="contact-success">
            <p>Got it — we'll be in touch shortly.</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label htmlFor="cf-name" className="form-label">Name</label>
              <input id="cf-name" name="name" type="text" className="form-input" placeholder="Your name" required />
            </div>
            <div className="form-row">
              <label htmlFor="cf-email" className="form-label">Email</label>
              <input id="cf-email" name="email" type="email" className="form-input" placeholder="you@company.com" required />
            </div>
            <div className="form-row">
              <label htmlFor="cf-type" className="form-label">Project type</label>
              <select id="cf-type" name="type" className="form-select">
                <option value="">Select…</option>
                <option value="website">Website</option>
                <option value="brand">Brand</option>
                <option value="strategy">Strategy</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-row form-row-half">
              <div>
                <label htmlFor="cf-budget" className="form-label">Budget</label>
                <select id="cf-budget" name="budget" className="form-select">
                  <option value="">Select…</option>
                  <option value="sub250">&lt;$250</option>
                  <option value="250-500">$250–$500</option>
                  <option value="500-750">$500-750$</option>
                  <option value="750+">$750+</option>
                </select>
              </div>
              <div>
                <label htmlFor="cf-timeline" className="form-label">Timeline</label>
                <select id="cf-timeline" name="timeline" className="form-select">
                  <option value="">Select…</option>
                  <option value="asap">ASAP</option>
                  <option value="1-3mo">1–3 months</option>
                  <option value="3-6mo">3–6 months</option>
                  <option value="exploring">Just exploring</option>
                </select>
              </div>
            </div>
            <div className="form-row">
              <label htmlFor="cf-message" className="form-label">Message</label>
              <textarea
                id="cf-message"
                name="message"
                className="form-textarea"
                placeholder="Tell us about your startup and what you need…"
                rows="4"
              />
            </div>
            <button type="submit" className="form-submit">Send message →</button>
          </form>
        )}
      </div>
    </div>
  )
}
