import SectionWrapper from "../ui/SectionWrapper";
import CertRow from "../ui/CertRow";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-white">
      <div className="mb-12">
        <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
          Credentials
        </p>
        <h2 className="font-sans text-6xl font-bold text-charcoal">
          Certifications
        </h2>
      </div>
      <div className="flex flex-col divide-y divide-gray-200 border border-gray-200 rounded-xl overflow-hidden">
        {certifications.map((cert, index) => (
          <CertRow key={cert.id} cert={cert} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
}
