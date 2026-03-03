import React, { useRef, useCallback, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowRight, Code, Palette, Search } from 'lucide-react'
import './ServiceCarousel.css'

export const ServiceCard = ({ service, index }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
      },
    },
  }

  const IconComponent = service.icon

  return (
    <motion.div
      variants={cardVariants}
      className={`service-card ${service.gradientClass}`}
    >
      <div className="service-card-content">
        <span className="service-number">( {service.number} )</span>
        <IconComponent className="service-icon" />
      </div>
      <div className="service-card-footer">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
      </div>
      <div className="service-overlay"></div>
    </motion.div>
  )
}

export const ServiceCarousel = ({ services }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'center',
    loop: true,
    slidesToScroll: 1,
  })
  const [canScrollNext, setCanScrollNext] = useState(false)

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setCanScrollNext(emblaApi.canScrollNext())
    }

    onSelect()
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <div className="service-carousel-wrapper" ref={ref}>
      <div className="service-carousel-container" ref={emblaRef}>
        <motion.div
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ staggerChildren: 0.1 }}
          className="service-carousel-content"
        >
          {services.map((service, index) => (
            <div key={index} className="service-carousel-item">
              <div className="service-carousel-item-padding">
                <ServiceCard service={service} index={index} />
              </div>
            </div>
          ))}
        </motion.div>
        <button
          className="service-carousel-next"
          onClick={scrollNext}
          disabled={!canScrollNext}
          aria-label="Next slide"
        >
          <ArrowRight className="service-carousel-arrow" />
        </button>
      </div>
    </div>
  )
}
