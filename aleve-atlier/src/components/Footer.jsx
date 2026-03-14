import logoName from '../assets/LOGONAME.png'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src={logoName} alt="Aleve Atelier" className="footer-logo" />
            <p className="footer-tagline">engineered to Elevate</p>
          </div>

          <div className="footer-columns">
            <div className="footer-col">
              <div className="footer-col-title">Explore</div>
              <a className="footer-link" href="#services">Services</a>
              <a className="footer-link" href="#portfolio">Portfolio</a>
              <a className="footer-link" href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Company</div>
              <a className="footer-link" href="/privacy">Privacy Policy</a>
              <a className="footer-link" href="/terms">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Aleve Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
