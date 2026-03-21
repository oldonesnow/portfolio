import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function SectionWrapper({ children, className = "", id = "" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-15%" });

  return (
    <section
      id={id}
      ref={ref}
      className={`relative px-6 py-24 md:px-16 lg:px-32 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}
