import BackgroundShaders from './components/BackgroundShaders'
import SleekLineCursor from './components/SleekLineCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppleCardCarousel from './components/AppleCardCarousel'
import AppleCard from './components/AppleCard'
import logo from './assets/AleveLOGONAME.jpeg'
import './App.css'

function App() {
  const servicesData = [
    {
      category: "Web Development",
      title: "Custom websites that perform.",
      src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      category: "Brand Marketing",
      title: "Elevate your brand presence.",
      src: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      category: "Digital Strategy",
      title: "Data-driven growth solutions.",
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
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
          <img src={logo} alt="Aleve Atelier" className="hero-logo" />
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

        <div id="about" className="about-section">
          <h2 className="section-title">About Us</h2>
          <div className="about-content">
            <p className="about-description">
              At Aleve Atelier, we are passionate about creating digital experiences 
              that make a lasting impact. With a focus on precision and performance, 
              we combine cutting-edge technology with strategic design to help brands 
              thrive in the digital landscape.
            </p>
            <p className="about-description">
              Our team of experts specializes in web development, brand marketing, and 
              digital strategy. We believe in building long-term partnerships with our 
              clients, delivering solutions that not only meet but exceed expectations.
            </p>
          </div>
        </div>

        <div id="services" className="services-section">
          <h2 className="section-title">Our Services</h2>
          <AppleCardCarousel>
            {servicesData.map((card, index) => (
              <AppleCard
                key={index}
                card={card}
                index={index}
              >
                <div className="apple-card-description">
                  <p>
                    <span className="font-bold">
                      Designed with Precision. Built to Perform.
                    </span>
                    {' '}
                    We deliver exceptional digital experiences that combine 
                    cutting-edge technology with strategic design. Every project 
                    is crafted to elevate your brand and drive measurable results.
                  </p>
                </div>
              </AppleCard>
            ))}
          </AppleCardCarousel>
        </div>

        <div id="contact" className="contact-section">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <p className="contact-description">
              Ready to elevate your brand? Let's discuss how we can help you achieve your goals.
            </p>
            <div className="contact-buttons">
              <button className="btn-primary">Get in Touch</button>
              <button className="btn-secondary">Schedule a Call</button>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default App
