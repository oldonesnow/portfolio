import SectionWrapper from "../ui/SectionWrapper";
import { experience } from "../../data/experience";
import { motion } from "framer-motion";

export default function Experience() {
  return (
    <div className="dark-section">
      <div className="section-divider" />
      <SectionWrapper id="experience">
        <span className="section-bg-label">EXPERIENCE</span>
        <div className="mb-16">
          <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="font-sans text-6xl font-bold text-charcoal">
            Experience
          </h2>
        </div>

        <div className="relative ml-4 md:ml-8">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-accent opacity-30" />

          <div className="flex flex-col gap-12">
            {experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: false, margin: "-80px" }}
                className="relative pl-10"
              >
                <div className="absolute left-0 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-accent border-2 border-white shadow-sm" />
                <div className="absolute left-0 -translate-x-1/2 top-6 w-3 h-3 rounded-full bg-accent opacity-30 animate-ping" />

                <div
                  className="dark-card border border-gray-200 rounded-xl p-8 hover:border-accent transition-colors duration-300"
                  style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-6">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap mb-1">
                        <h3 className="text-2xl font-semibold text-charcoal">
                          {job.company}
                        </h3>
                        {job.badge && (
                          <span className="font-mono text-xs px-2 py-0.5 bg-accent text-white rounded tracking-wide">
                            {job.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-lg text-muted">{job.role}</p>
                      <p className="font-mono text-sm text-accent mt-1">
                        {job.type}
                      </p>
                    </div>
                    <span className="font-mono text-sm text-muted whitespace-nowrap">
                      {job.period}
                    </span>
                  </div>

                  <ul className="flex flex-col gap-3 mb-6">
                    {job.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 leading-relaxed">
                        <span className="text-accent shrink-0 mt-1">--</span>
                        <span className="text-base text-charcoal leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-sm px-2 py-1 border border-gray-300 text-muted rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
      <div className="section-divider" />
    </div>
  );
}
