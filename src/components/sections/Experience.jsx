import SectionWrapper from "../ui/SectionWrapper";
import ExperienceCard from "../ui/ExperienceCard";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <div className="dark-section">
      <div className="section-divider" />
      <SectionWrapper id="experience">
        <div className="mb-12">
          <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
            Work History
          </p>
          <h2 className="font-sans text-6xl font-bold text-charcoal">
            Experience
          </h2>
        </div>
        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <ExperienceCard key={job.id} job={job} index={index} />
          ))}
        </div>
      </SectionWrapper>
      <div className="section-divider" />
    </div>
  );
}
