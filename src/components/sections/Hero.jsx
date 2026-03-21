import { motion } from "framer-motion";
import { meta } from "../../data/meta";
import { useParallax } from "../../hooks/useParallax";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  const parallax = useParallax(0.15);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-base">
      {/* Parallax background grid */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{ transform: "translateY(" + parallax + "px)" }}
      >
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#C8922A"
                strokeWidth="0.3"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Accent circle */}
      <div className="absolute top-32 right-24 w-64 h-64 rounded-full border border-accent opacity-10 pointer-events-none" />
      <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-accent opacity-10 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 lg:px-32 w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="font-mono text-xs text-accent tracking-widest uppercase mb-6"
          >
            Portfolio
          </motion.p>

          <motion.h1
            variants={item}
            className="font-sans text-5xl md:text-7xl font-bold text-charcoal leading-tight mb-6"
          >
            {meta.name}
          </motion.h1>

          <motion.p
            variants={item}
            className="font-mono text-sm text-muted tracking-wide mb-4"
          >
            Offensive Security · VAPT · GPEN Certified · OSCP In Progress
          </motion.p>

          <motion.p
            variants={item}
            className="font-sans text-lg text-muted max-w-xl leading-relaxed mb-10"
          >
            Cybersecurity undergraduate at NTU specialising in offensive
            security and vulnerability research. Hands-on experience across SOC
            environments and OT/ICS critical infrastructure.
          </motion.p>

          <motion.div variants={item} className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="font-sans text-sm px-6 py-3 bg-charcoal text-base hover:bg-accent transition-colors duration-300 rounded"
            >
              View My Work
            </a>

            <a
              href={meta.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-sans text-sm px-6 py-3 border border-charcoal text-charcoal hover:border-accent hover:text-accent transition-colors duration-300 rounded"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-16 flex flex-wrap gap-6">
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Degree
              </span>
              <span className="font-sans text-sm text-charcoal">
                B.Comp. Computer Science, NTU
              </span>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Specialisation
              </span>
              <span className="font-sans text-sm text-charcoal">
                Cybersecurity
              </span>
            </div>
            <div className="w-px bg-gray-200" />
            <div className="flex flex-col gap-1">
              <span className="font-mono text-xs text-accent tracking-widest uppercase">
                Location
              </span>
              <span className="font-sans text-sm text-charcoal">Singapore</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-xs text-muted tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-8 bg-muted" />
      </div>
    </section>
  );
}
