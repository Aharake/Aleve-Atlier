import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import './ServiceCarousel.css'

const ServiceCard = ({ service, index }) => {
  const IconComponent = service.icon

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } },
      }}
      className={`service-card ${service.gradientClass}`}
    >
      <div className="service-card-top">
        <span className="service-number">( {service.number} )</span>
        <IconComponent className="service-icon" aria-hidden="true" />
      </div>
      <div className="service-card-body">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        {service.capabilities && (
          <ul className="service-capabilities">
            {service.capabilities.map((cap, i) => (
              <li key={i} className="service-cap">{cap}</li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export const ServiceCarousel = ({ services }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div className="service-grid-wrapper" ref={ref}>
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: 0.1 }}
        className="service-grid"
      >
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </motion.div>
    </div>
  )
}
