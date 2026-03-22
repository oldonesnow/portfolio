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
        viewport={{ once: false, margin: "-60px" }}
        onClick={() => setOpen(true)}
        className={
          "cursor-pointer rounded-xl p-6 flex flex-col transition-all duration-500 relative overflow-hidden " +
          (project.featured
            ? "bg-white border-2 border-accent shadow-lg hover:shadow-xl hover:scale-[1.02]"
            : "bg-white border border-gray-200 hover:border-accent hover:shadow-md")
        }
      >
        {project.images && project.images.length > 0 && (
          <div
            className="absolute inset-0 opacity-0 hover:opacity-10 transition-opacity duration-500 pointer-events-none"
            style={{
              backgroundImage: "url(" + project.images[0] + ")",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        )}

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
              <span className="font-mono text-xs px-2 py-0.5 rounded border bg-amber-50 text-amber-700 border-amber-300 font-medium">
                Featured
              </span>
            )}
            {project.pinned && (
              <span className="font-mono text-xs px-2 py-0.5 rounded border bg-charcoal text-white border-charcoal">
                Pinned
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-muted shrink-0">
            {project.year}
          </span>
        </div>

        <h3
          className={
            "font-sans font-semibold text-charcoal mb-3 " +
            (project.featured ? "text-xl" : "text-lg")
          }
        >
          {project.title}
        </h3>
        <p className="font-sans text-base text-muted leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="tag-pop font-mono text-xs px-2 py-1 bg-surface text-muted border border-gray-200 rounded"
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
          <span
            className={
              "font-mono text-xs " +
              (project.featured ? "text-accent font-medium" : "text-muted")
            }
          >
            View details
          </span>
        </div>
      </motion.div>

      {open && (
        <ProjectModal project={project} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
