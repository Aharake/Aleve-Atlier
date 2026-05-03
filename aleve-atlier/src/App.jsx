import BackgroundShaders from './components/BackgroundShaders'
import SleekLineCursor from './components/SleekLineCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import { ServiceCarousel } from './components/ServiceCarousel'
import { GetInTouch } from './components/GetInTouch'
import ProcessStrip from './components/ProcessStrip'
import { Code, Palette, Search } from 'lucide-react'
import './App.css'

function App() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const servicesData = [
    {
      number: "01",
      title: "Web Development",
      description: "Custom sites built for speed, clarity, and conversions from day one.",
      icon: Code,
      gradientClass: "gradient-1",
      capabilities: [
        'Headless CMS integration',
        'Performance + Core Web Vitals',
        'CMS handoff & training',
      ],
    },
    {
      number: "02",
      title: "Brand Identity",
      description: "Logo, color, type, and guidelines — everything your startup needs to look credible.",
      icon: Palette,
      gradientClass: "gradient-2",
      capabilities: [
        'Logo & mark design',
        'Color & typography system',
        'Social & pitch assets',
      ],
    },
    {
      number: "03",
      title: "Digital Strategy",
      description: "Positioning, messaging, and a launch plan so your first impression sticks.",
      icon: Search,
      gradientClass: "gradient-3",
      capabilities: [
        'Positioning & messaging',
        'Competitive landscape audit',
        'Launch roadmap',
      ],
    },
  ]

  return (
    <div className="app-container">
      <BackgroundShaders />
      <SleekLineCursor />
      <Navbar />

      <div className="content-overlay">
        {/* Hero */}
        <div className="hero-section">
          <p className="hero-eyebrow">( 01 ) — INDEPENDENT DIGITAL STUDIO</p>
          <h1 className="hero-display">
            Your startup's first website.<br />Done right.
          </h1>
          <p className="hero-sub">
            We build high-performance websites and brand identities for early-stage startups.
            Fast, hands-on, end-to-end — without the agency overhead.
          </p>
          <div className="cta-buttons">
            <button className="btn-primary" onClick={() => scrollTo('contact')}>
              Start a project →
            </button>
            <button className="btn-secondary" onClick={() => scrollTo('portfolio')}>
              See our work
            </button>
          </div>
        </div>

        {/* Services */}
        <div id="services" className="services-section">
          <div className="section-intro">
            <p className="section-eyebrow">( 02 ) — WHAT WE DO</p>
            <h2 className="section-heading">Three things, done well.</h2>
          </div>
          <ServiceCarousel services={servicesData} />
        </div>

        {/* Process */}
        <ProcessStrip />

        {/* Portfolio */}
        <div id="portfolio" className="portfolio-section">
          <Portfolio />
        </div>

        {/* Contact */}
        <div id="contact" className="contact-section">
          <GetInTouch />
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default App
