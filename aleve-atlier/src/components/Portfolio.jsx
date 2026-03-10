import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
import WebGLShader from './WebGLShader'
import SparklesCore from './SparklesCore'
import BackgroundBeams from './BackgroundBeams'
import Vortex from './Vortex'
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from './TextRevealCard'
import './Portfolio.css'

export default function Portfolio() {
  const sectionRef = useRef(null)

  return (
    <div className="portfolio-wrapper" ref={sectionRef}>
      <ReactLenis root>
        <section className="portfolio-hero">
          <div className="portfolio-hero-grid"></div>
          <h1 className="portfolio-hero-title">
            Our Portfolio
            <br />
            Showcasing Excellence in Digital Design <br />
    
          </h1>
        </section>

        <section className="portfolio-gallery">
          <div className="portfolio-grid">
            <div className="portfolio-column portfolio-column-left">
              <figure className="portfolio-figure portfolio-theme theme-sparkles layout-hero-left">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Studio North</div>
                    <div className="portfolio-theme-nav">
                      <span>Work</span>
                      <span>Services</span>
                      <span>Contact</span>
                    </div>
                    <button className="portfolio-theme-cta">Start</button>
                  </div>
                  <div className="portfolio-theme-viewport">
                    <SparklesCore
                      className="portfolio-theme-canvas"
                      background="#0b0b0b"
                      particleColor="#ffffff"
                      particleDensity={140}
                    />
                    <div className="layout-hero-block">
                      <div className="portfolio-theme-kicker">Brand Strategy</div>
                      <h3>Dark-first identities for modern teams.</h3>
                      <p>Launch-ready systems with motion, depth, and clarity.</p>
                    </div>
                    <div className="layout-metrics">
                      <div>
                        <span>12</span>
                        <small>Launches</small>
                      </div>
                      <div>
                        <span>4.9</span>
                        <small>Avg Rating</small>
                      </div>
                      <div>
                        <span>28%</span>
                        <small>Lift</small>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
              <figure className="portfolio-figure portfolio-theme theme-beams layout-sidebar">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Grayscale Lab</div>
                    <div className="portfolio-theme-nav">
                      <span>About</span>
                      <span>Archive</span>
                      <span>Journal</span>
                    </div>
                    <button className="portfolio-theme-cta">Visit</button>
                  </div>
                  <div className="portfolio-theme-viewport">
                    <BackgroundBeams className="portfolio-theme-canvas" />
                    <div className="layout-sidebar-nav">
                      <span>Overview</span>
                      <span>Case Studies</span>
                      <span>Team</span>
                    </div>
                    <div className="layout-sidebar-content">
                      <div className="portfolio-theme-kicker">Editorial Web</div>
                      <h3>Structured layouts with cinematic motion.</h3>
                      <p>Designed for studios, agencies, and portfolio teams.</p>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-center">
              <figure className="portfolio-figure portfolio-figure-sticky portfolio-theme portfolio-theme-full theme-vortex layout-center">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Aleve Motion</div>
                    <div className="portfolio-theme-nav">
                      <span>Home</span>
                      <span>Cases</span>
                      <span>Labs</span>
                      <span>Contact</span>
                    </div>
                    <button className="portfolio-theme-cta">Book</button>
                  </div>
                  <div className="portfolio-theme-viewport">
                    <Vortex
                      containerClassName="portfolio-theme-canvas"
                      backgroundColor="#050505"
                    />
                    <div className="layout-center-content">
                      <div className="portfolio-theme-kicker">Immersive Web</div>
                      <h3>Interactive visuals for high-end launches.</h3>
                      <p>3D motion and shader systems tailored to your story.</p>
                      <div className="layout-cta-row">
                        <button>Book a demo</button>
                        <span>Case study ?</span>
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-right">
              <figure className="portfolio-figure portfolio-theme theme-reveal layout-apple">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Signal Studio</div>
                    <div className="portfolio-theme-nav">
                      <span>Overview</span>
                      <span>Why</span>
                      <span>Tech Specs</span>
                      <span>Buy</span>
                    </div>
                    <button className="portfolio-theme-cta">Preorder</button>
                  </div>
                  <div className="portfolio-theme-viewport">
                    <div className="apple-hero">
                      <div className="apple-eyebrow">New</div>
                      <h3>Signal One</h3>
                      <p>Focus. Clarity. A studio console built for teams.</p>
                      <div className="apple-cta">
                        <button>Buy</button>
                        <span>Learn more</span>
                      </div>
                    </div>
                    <div className="apple-card">
                      <div className="apple-card-title">Now in graphite.</div>
                      <div className="apple-card-sub">Battery for all-day work.</div>
                    </div>
                    <div className="apple-preview">
                      <TextRevealCard
                        text="You know the business"
                        revealText="I know the chemistry"
                      >
                        <TextRevealCardTitle>
                          Sometimes, you just need to see it.
                        </TextRevealCardTitle>
                        <TextRevealCardDescription>
                          This is a text reveal card. Hover over the card to reveal the hidden text.
                        </TextRevealCardDescription>
                      </TextRevealCard>
                    </div>
                  </div>
                </div>
              </figure>
              <figure className="portfolio-figure portfolio-theme theme-webgl layout-split">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Mono Works</div>
                    <div className="portfolio-theme-nav">
                      <span>Studio</span>
                      <span>Work</span>
                      <span>Contact</span>
                    </div>
                    <button className="portfolio-theme-cta">Get Quote</button>
                  </div>
                  <div className="portfolio-theme-viewport">
                    <WebGLShader
                      className="portfolio-theme-canvas"
                      xScale={1.05}
                      yScale={0.48}
                      distortion={0.05}
                      speed={0.01}
                    />
                    <div className="layout-split-grid">
                      <div>
                        <div className="portfolio-theme-kicker">Product Sites</div>
                        <h3>Minimal, focused launches with depth.</h3>
                        <p>Conversion-led layouts for premium offerings.</p>
                      </div>
                      <ul className="layout-split-list">
                        <li>UX audit</li>
                        <li>Motion system</li>
                        <li>Launch kit</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </section>
      </ReactLenis>
    </div>
  )
}
