import SectionWrapper from "../ui/SectionWrapper";
import { skills } from "../../data/skills";
import { motion } from "framer-motion";

export default function Skills() {
  return (
    <div className="dark-section">
      <div className="section-divider" />
      <SectionWrapper id="skills">
        <div className="mb-12">
          <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
            Capabilities
          </p>
          <h2 className="font-sans text-6xl font-bold text-charcoal">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: groupIndex * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              viewport={{ once: false, margin: "-60px" }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-5 bg-accent rounded-full" />
                <h3 className="font-mono text-sm text-charcoal tracking-wide uppercase">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="tag-pop font-mono text-sm px-3 py-1.5 dark-card border border-gray-300 text-charcoal rounded hover:border-accent hover:text-accent transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>
      <div className="section-divider" />
    </div>
  );
}
