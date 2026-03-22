import { motion } from "framer-motion";

export default function ExperienceCard({ job, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: "-60px" }}
      className="dark-card border border-gray-200 rounded-lg p-8 hover:border-accent transition-colors duration-300"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
    >
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="text-2xl font-semibold text-charcoal">
              {job.company}
            </h3>
            {job.badge && (
              <span className="font-mono text-sm px-2 py-0.5 bg-accent text-white rounded tracking-wide">
                {job.badge}
              </span>
            )}
          </div>
          <p className="text-lg text-muted">{job.role}</p>
          <p className="font-mono text-sm text-accent tracking-wide mt-1">
            {job.type}
          </p>
        </div>
        <span className="font-mono text-sm text-muted tracking-wide whitespace-nowrap">
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
            className="tag-pop font-mono text-sm px-2 py-1 border border-gray-300 text-muted rounded"
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
