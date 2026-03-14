import BackgroundShaders from './components/BackgroundShaders'
import SleekLineCursor from './components/SleekLineCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Portfolio from './components/Portfolio'
import { ServiceCarousel } from './components/ServiceCarousel'
import { GetInTouch } from './components/GetInTouch'
import { Code, Palette, Search } from 'lucide-react'
import './App.css'

function App() {
  const servicesData = [
    {
      number: "01",
      title: "Web Development",
      description: "Custom websites that perform. We build responsive, fast, and scalable web solutions tailored to your business needs.",
      icon: Code,
      gradientClass: "gradient-1",
    },
    {
      number: "02",
      title: "Brand Marketing",
      description: "Elevate your brand presence. Strategic marketing campaigns that connect with your audience and drive results.",
      icon: Palette,
      gradientClass: "gradient-2",
    },
    {
      number: "03",
      title: "Digital Strategy",
      description: "Data-driven growth solutions. Comprehensive strategies that transform your digital presence and maximize ROI.",
      icon: Search,
      gradientClass: "gradient-3",
    },
  ]

  return (
    <div className="app-container">
      <BackgroundShaders />
      <SleekLineCursor />
      <Navbar />
      
      {/* Main Content */}
      <div className="content-overlay">
        <div className="hero-section">
          <h1 className="hero-title">Aleve Atelier</h1>
          <p className="hero-subtitle">Crafting Digital Excellence for Brands</p>
          <p className="hero-description">
            We create stunning websites and powerful marketing strategies 
            that elevate your brand and drive results.
          </p>
          
          <div className="cta-buttons">
            <button className="btn-primary">Get Started</button>
            <button className="btn-secondary">View Our Work</button>
          </div>
        </div>

        <div id="services" className="services-section">
          <h2 className="section-title">Our Services</h2>
          <ServiceCarousel services={servicesData} />
        </div>

        <div id="portfolio" className="portfolio-section">
          <Portfolio />
        </div>

        <div id="contact" className="contact-section">
          <GetInTouch />
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
