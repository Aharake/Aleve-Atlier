import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo-text">Aleve Atelier</div>
            <p className="footer-tagline">engineered to Elevate</p>
          </div>

          <div className="footer-links">
            <a className="footer-link" href="/privacy">Privacy Policy</a>
            <a className="footer-link" href="/terms">Terms</a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Aleve Atelier. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
