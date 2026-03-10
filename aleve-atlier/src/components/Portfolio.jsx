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
              <figure className="portfolio-figure portfolio-theme">
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
                    <div className="portfolio-theme-hero">
                      <div className="portfolio-theme-kicker">Brand Strategy</div>
                      <h3>Dark-first identities for modern teams.</h3>
                      <p>Launch-ready systems with motion, depth, and clarity.</p>
                    </div>
                  </div>
                </div>
              </figure>
              <figure className="portfolio-figure portfolio-theme">
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
                    <div className="portfolio-theme-hero">
                      <div className="portfolio-theme-kicker">Editorial Web</div>
                      <h3>Structured layouts with cinematic motion.</h3>
                      <p>Designed for studios, agencies, and portfolio teams.</p>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-center">
              <figure className="portfolio-figure portfolio-figure-sticky portfolio-theme portfolio-theme-full">
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
                    <div className="portfolio-theme-hero">
                      <div className="portfolio-theme-kicker">Immersive Web</div>
                      <h3>Interactive visuals for high-end launches.</h3>
                      <p>3D motion and shader systems tailored to your story.</p>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-right">
              <figure className="portfolio-figure portfolio-theme">
                <div className="portfolio-theme-frame">
                  <div className="portfolio-theme-header">
                    <div className="portfolio-theme-brand">Signal Studio</div>
                    <div className="portfolio-theme-nav">
                      <span>Services</span>
                      <span>Projects</span>
                      <span>Insights</span>
                    </div>
                    <button className="portfolio-theme-cta">Contact</button>
                  </div>
                  <div className="portfolio-theme-viewport text-reveal-preview">
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
              </figure>
              <figure className="portfolio-figure portfolio-theme">
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
                    <div className="portfolio-theme-hero">
                      <div className="portfolio-theme-kicker">Product Sites</div>
                      <h3>Minimal, focused launches with depth.</h3>
                      <p>Conversion-led layouts for premium offerings.</p>
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

