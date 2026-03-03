import { useRef } from 'react'
import { ReactLenis } from 'lenis/react'
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
            Scroll down! 👇
          </h1>
        </section>

        <section className="portfolio-gallery">
          <div className="portfolio-grid">
            <div className="portfolio-column portfolio-column-left">
              <figure className="portfolio-figure">
                <img
                  src="https://images.unsplash.com/photo-1718838541476-d04e71caa347?w=500&auto=format&fit=crop"
                  alt="Portfolio work"
                  className="portfolio-image"
                />
              </figure>
              <figure className="portfolio-figure">
                <img
                  src="https://images.unsplash.com/photo-1715432362539-6ab2ab480db2?w=500&auto=format&fit=crop"
                  alt="Portfolio work"
                  className="portfolio-image"
                />
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-center">
              <figure className="portfolio-figure portfolio-figure-sticky">
                <img
                  src="https://images.unsplash.com/photo-1718969604981-de826f44ce15?w=500&auto=format&fit=crop"
                  alt="Portfolio work"
                  className="portfolio-image portfolio-image-full"
                />
              </figure>
            </div>
            <div className="portfolio-column portfolio-column-right">
              <figure className="portfolio-figure">
                <img
                  src="https://images.unsplash.com/photo-1719547907790-f661a88302c2?w=500&auto=format&fit=crop"
                  alt="Portfolio work"
                  className="portfolio-image"
                />
              </figure>
              <figure className="portfolio-figure">
                <img
                  src="https://images.unsplash.com/photo-1599054799131-4b09c73a63cf?w=500&auto=format&fit=crop"
                  alt="Portfolio work"
                  className="portfolio-image"
                />
              </figure>
            </div>
          </div>
        </section>
      </ReactLenis>
    </div>
  )
}
