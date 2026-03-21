import { useState } from "react";
import { motion } from "framer-motion";
import ProjectModal from "./ProjectModal";

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

export default function ProjectCard({ project, index }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, margin: "-60px" }}
        onClick={() => setOpen(true)}
        className={
          "cursor-pointer border border-gray-200 rounded-lg p-6 bg-white hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col " +
          (project.featured ? "ring-1 ring-accent ring-opacity-30" : "")
        }
      >
        <div className="flex items-start justify-between gap-4 mb-4">
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
          </div>
          <span className="font-mono text-xs text-muted shrink-0">
            {project.year}
          </span>
        </div>

        <h3 className="font-sans text-lg font-semibold text-charcoal mb-3">
          {project.title}
        </h3>
        <p className="font-sans text-base text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono text-xs px-2 py-1 bg-surface text-muted border border-gray-200 rounded"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-xs px-2 py-1 text-muted">
              +{project.tags.length - 4} more
            </span>
          )}
        </div>

        <div className="mt-auto pt-2 border-t border-gray-100">
          <span className="font-mono text-xs text-accent">View details</span>
        </div>
      </motion.div>

      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
