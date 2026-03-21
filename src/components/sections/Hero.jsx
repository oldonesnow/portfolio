import { motion } from "framer-motion";
import { meta } from "../../data/meta";
import { useParallax } from "../../hooks/useParallax";
import { TypeAnimation } from "react-type-animation";

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

      <div className="absolute top-32 right-24 w-64 h-64 rounded-full border border-accent opacity-10 pointer-events-none" />
      <div className="absolute top-40 right-32 w-48 h-48 rounded-full border border-accent opacity-10 pointer-events-none" />

      <div className="relative z-10 px-6 md:px-16 lg:px-32 w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex-1 max-w-2xl"
          >
            <motion.p
              variants={item}
              className="font-mono text-sm text-accent tracking-widest uppercase mb-6"
            >
              Portfolio
            </motion.p>

            <motion.h1
              variants={item}
              className="font-sans text-5xl md:text-6xl font-bold text-charcoal leading-tight mb-6"
            >
              {meta.name}
            </motion.h1>

            <motion.div
              variants={item}
              className="font-mono text-base text-accent tracking-wide mb-6"
            >
              <TypeAnimation
                sequence={[
                  "Hi! 👋, I am Lau Yi Xue.",
                  1000,
                  "Hi! 👋, I am Lau Yi Xue. An Offensive Security Researcher.",
                  1000,
                  "Hi! 👋, I am Lau Yi Xue. An Offensive Security Researcher. VAPT Specialist.",
                  1000,
                  "Hi! 👋, I am Lau Yi Xue. An Offensive Security Researcher. VAPT Specialist. GPEN Certified.",
                  1000,
                  "Hi! 👋, I am Lau Yi Xue. An Offensive Security Researcher. VAPT Specialist. GPEN Certified. OSCP In Progress.",
                  4000,
                  "",
                  500,
                ]}
                wrapper="span"
                speed={75}
                deletionSpeed={95}
                repeat={Infinity}
                cursor={true}
              />
            </motion.div>
            <motion.p
              variants={item}
              className="font-sans text-lg text-muted max-w-xl leading-relaxed mb-10"
            >
              Cybersecurity undergraduate at NTU specialising in offensive
              security and vulnerability research. Hands-on experience across
              SOC environments and OT/ICS critical infrastructure.
            </motion.p>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="font-sans text-base px-6 py-3 bg-charcoal text-white hover:bg-accent transition-colors duration-300 rounded"
              >
                View My Work
              </a>
              <a
                href={meta.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-base px-6 py-3 border border-charcoal text-charcoal hover:border-accent hover:text-accent transition-colors duration-300 rounded"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-12 flex flex-wrap gap-8">
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-accent tracking-widest uppercase">
                  Degree
                </span>
                <span className="font-sans text-base text-charcoal">
                  B.Comp. Computer Science, NTU
                </span>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-accent tracking-widest uppercase">
                  Specialisation
                </span>
                <span className="font-sans text-base text-charcoal">
                  Cybersecurity
                </span>
              </div>
              <div className="w-px bg-gray-200" />
              <div className="flex flex-col gap-1">
                <span className="font-mono text-sm text-accent tracking-widest uppercase">
                  Location
                </span>
                <span className="font-sans text-base text-charcoal">
                  Singapore
                </span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="shrink-0 flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-accent overflow-hidden shadow-xl">
                <img
                  src="/portfolio/profile.jpg"
                  alt="Lau Yi Xue"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-56 h-56 md:w-72 md:h-72 rounded-full border border-accent opacity-20" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="font-mono text-sm text-muted tracking-widest">
          SCROLL
        </span>
        <div className="w-px h-8 bg-muted" />
      </div>
    </section>
  );
}
