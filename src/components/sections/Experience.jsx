import SectionWrapper from "../ui/SectionWrapper";
import ExperienceCard from "../ui/ExperienceCard";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-white">
      <div className="mb-12">
        <p className="font-mono text-base text-yellow-600 tracking-widest uppercase mb-3">
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
  );
}
