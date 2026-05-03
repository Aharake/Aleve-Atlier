import './Portfolio.css'

const Chrome = ({ url, light }) => (
  <div className={`mock-chrome ${light ? 'mock-chrome-light' : ''}`}>
    <div className="mock-dots">
      <span className="dot dot-red" />
      <span className="dot dot-yellow" />
      <span className="dot dot-green" />
    </div>
    <span className="mock-url">{url}</span>
  </div>
)

/* ── Vesta — SaaS productivity ── */
const VestaCard = () => (
  <div className="mock-card mock-vesta">
    <Chrome url="vesta.so" />
    <nav className="mock-nav">
      <span className="mock-brand">VESTA</span>
      <div className="mock-nav-links">
        <span>Product</span><span>Pricing</span><span>Blog</span>
      </div>
      <button className="mock-cta-btn">Sign up free</button>
    </nav>
    <div className="mock-hero vesta-hero">
      <p className="mock-kicker">For teams that ship</p>
      <h2 className="mock-headline">Clarity at<br />every step.</h2>
      <p className="mock-sub">The workspace built for focus, not noise.</p>
      <div className="mock-btn-row">
        <button className="mock-primary vesta-primary">Start free →</button>
        <span className="mock-link">Watch demo</span>
      </div>
    </div>
    <div className="vesta-stats">
      <div className="vesta-stat"><span>128</span><small>Tasks shipped</small></div>
      <div className="vesta-stat"><span>94%</span><small>On track</small></div>
      <div className="vesta-stat"><span>6</span><small>Active sprints</small></div>
    </div>
    <div className="mock-label">
      <span className="mock-project">Vesta — SaaS · Web · Strategy</span>
    </div>
  </div>
)

/* ── Maison Éclat — luxury fashion brand ── */
const MaisonCard = () => (
  <div className="mock-card mock-maison">
    <Chrome url="maisoneeclat.com" light />
    <nav className="mock-nav mock-nav-light">
      <span className="mock-brand maison-brand">MAISON ÉCLAT</span>
      <div className="mock-nav-links maison-links">
        <span>Boutique</span><span>Lookbook</span><span>Ateliers</span>
      </div>
    </nav>
    <div className="mock-hero maison-hero">
      <p className="maison-season">Collection — SS 2025</p>
      <h2 className="maison-headline">Where restraint<br />becomes beauty.</h2>
      <div className="maison-img-block">
        <div className="maison-img-placeholder" />
        <div className="maison-img-caption">LOOKBOOK NO. 04</div>
      </div>
    </div>
    <div className="mock-label mock-label-light">
      <span className="mock-project">Maison Éclat — Fashion · Brand · Editorial</span>
    </div>
  </div>
)

/* ── Fable — F&B brand ── */
const FableCard = () => (
  <div className="mock-card mock-fable">
    <Chrome url="fable.co" />
    <nav className="mock-nav">
      <span className="mock-brand fable-brand">FABLE</span>
      <div className="mock-nav-links">
        <span>Menu</span><span>Story</span><span>Reserve</span>
      </div>
      <button className="mock-cta-btn fable-cta">Book a table</button>
    </nav>
    <div className="mock-hero fable-hero">
      <div className="fable-stamp">EST · 2024</div>
      <h2 className="fable-headline">Grown with<br />intention.</h2>
      <p className="mock-sub fable-sub">Small-batch, farm-to-table, honest.</p>
    </div>
    <div className="mock-label">
      <span className="mock-project">Fable — F&amp;B · Identity · Web</span>
    </div>
  </div>
)

export default function Portfolio() {
  return (
    <div className="portfolio-wrapper">
      <section className="portfolio-hero">
        <div className="portfolio-hero-grid" aria-hidden="true" />
        <p className="portfolio-eyebrow">( 04 ) — SELECTED WORK</p>
        <h1 className="portfolio-hero-title">Recent work.</h1>
      </section>

      <section className="portfolio-gallery">
        <div className="portfolio-mockup-grid">
          <div className="pmg-featured">
            <VestaCard />
          </div>
          <div className="pmg-secondary">
            <MaisonCard />
            <FableCard />
          </div>
        </div>
      </section>
    </div>
  )
}
