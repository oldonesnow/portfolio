import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const typeColors = {
  security: "bg-red-50 text-red-700 border-red-200",
  engineering: "bg-blue-50 text-blue-700 border-blue-200",
  ml: "bg-purple-50 text-purple-700 border-purple-200",
};

const typeLabels = {
  security: "Security",
  engineering: "Engineering",
  ml: "ML / AI",
};

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
        style={{
          backgroundColor: "rgba(17,19,24,0.7)",
          backdropFilter: "blur(4px)",
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 32, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 32, scale: 0.97 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-screen overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-8 md:p-10">
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex flex-wrap gap-2">
                <span
                  className={
                    "font-mono text-xs px-2 py-0.5 rounded border " +
                    typeColors[project.type]
                  }
                >
                  {typeLabels[project.type]}
                </span>
                {project.featured && (
                  <span className="font-mono text-xs px-2 py-0.5 rounded border bg-amber-50 text-amber-700 border-amber-200">
                    Featured
                  </span>
                )}
                <span className="font-mono text-xs px-2 py-0.5 rounded border bg-gray-50 text-muted border-gray-200">
                  {project.year}
                </span>
              </div>
              <button
                onClick={onClose}
                className="font-mono text-sm text-muted hover:text-charcoal transition-colors shrink-0"
              >
                X
              </button>
            </div>

            <h2 className="font-sans text-3xl font-bold text-charcoal mb-4">
              {project.title}
            </h2>
            <p className="font-sans text-base text-muted leading-relaxed mb-8">
              {project.description}
            </p>

            {project.images && project.images.length > 0 && (
              <div className="mb-8">
                <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
                  Screenshots
                </p>
                <div className="grid grid-cols-1 gap-4">
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={"Screenshot " + (i + 1)}
                      className="w-full rounded-lg border border-gray-200 object-cover"
                    />
                  ))}
                </div>
              </div>
            )}

            {project.methodology && (
              <div className="mb-8">
                <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
                  Methodology
                </p>
                <ul className="flex flex-col gap-3">
                  {project.methodology.map((step, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-base text-charcoal leading-relaxed"
                    >
                      <span className="text-accent shrink-0 font-mono">
                        0{i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mb-8">
              <p className="font-mono text-sm text-accent tracking-widest uppercase mb-4">
                Tools & Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-sm px-3 py-1 bg-surface text-muted border border-gray-200 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6 flex flex-wrap gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-4 py-2 border border-charcoal text-charcoal hover:border-accent hover:text-accent transition-colors rounded"
                >
                  GitHub
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-4 py-2 bg-charcoal text-white hover:bg-accent transition-colors rounded"
                >
                  Live Demo
                </a>
              )}
              {project.writeup && (
                <a
                  href={project.writeup}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-sm px-4 py-2 bg-charcoal text-white hover:bg-accent transition-colors rounded"
                >
                  Read Writeup
                </a>
              )}
              {!project.github && !project.live && !project.writeup && (
                <p className="font-mono text-sm text-muted">
                  Links coming soon
                </p>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
