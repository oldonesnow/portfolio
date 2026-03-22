import { useState } from "react";
import SectionWrapper from "../ui/SectionWrapper";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "../../data/projects";

const filters = ["All", "Security", "Engineering & ML"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = projects
    .filter((p) => {
      if (active === "All") return true;
      if (active === "Security") return p.type === "security";
      if (active === "Engineering & ML")
        return p.type === "engineering" || p.type === "ml";
      return true;
    })
    .sort((a, b) => {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
      return parseInt(b.year) - parseInt(a.year);
    });

  return (
    <div className="dark-section">
      <div className="section-divider" />
      <SectionWrapper id="projects">
        <div className="mb-12">
          <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
            Work
          </p>
          <h2 className="font-sans text-6xl font-bold text-charcoal mb-8">
            Projects
          </h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActive(filter)}
                className={
                  "font-mono text-sm px-4 py-2 rounded border transition-colors duration-200 " +
                  (active === filter
                    ? "bg-accent text-white border-accent"
                    : "bg-transparent text-muted border-gray-400 hover:border-charcoal hover:text-charcoal")
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </SectionWrapper>
      <div className="section-divider" />
    </div>
  );
}
