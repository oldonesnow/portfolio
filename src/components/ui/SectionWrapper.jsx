import { useRef } from "react"
import { motion, useInView } from "framer-motion"

export default function SectionWrapper({ children, className = "", id = "" }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section
      id={id}
      ref={ref}
      className={`relative px-6 py-24 md:px-16 lg:px-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  )
}