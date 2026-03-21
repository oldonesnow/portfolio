import SectionWrapper from "../ui/SectionWrapper";
import { education } from "../../data/education";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <SectionWrapper id="education" className="bg-base">
      <div className="mb-12">
        <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
          Academic Background
        </p>
        <h2 className="font-sans text-6xl font-bold text-charcoal">
          Education
        </h2>
      </div>

      <div className="relative ml-4 md:ml-8">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-accent opacity-30" />

        <div className="flex flex-col gap-10">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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

              <div
                className="border border-gray-200 rounded-xl p-8 bg-white hover:border-accent transition-colors duration-300"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex items-start gap-5">
                    {edu.logo && (
                      <div
                        className={
                          "w-24 h-24 rounded-xl border border-gray-200 bg-white flex items-center justify-center shrink-0 overflow-hidden " +
                          (edu.logoSize || "p-0")
                        }
                      >
                        {" "}
                        <img
                          src={edu.logo}
                          alt={edu.institution}
                          className="w-full h-full object-contain"
                        />
                      </div>
                    )}
                    <div>
                      <h3 className="font-sans text-2xl font-semibold text-charcoal mb-1">
                        {edu.institution}
                      </h3>
                      <p className="font-sans text-lg text-muted mb-2">
                        {edu.degree}
                      </p>
                      <p className="font-mono text-sm text-accent">
                        {edu.details}
                      </p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-muted whitespace-nowrap shrink-0">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
