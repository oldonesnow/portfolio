import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { meta } from "../../data/meta";

export default function About() {
  return (
    <div className="dark-section">
      <div className="section-divider" />
      <SectionWrapper id="about">
        <div className="mb-12">
          <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
            Background
          </p>
          <h2 className="font-sans text-6xl font-bold text-charcoal">About</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="lg:col-span-2 flex flex-col gap-6"
          >
            <p className="font-sans text-lg text-charcoal leading-relaxed">
              I am a final-year Computer Science undergraduate at Nanyang
              Technological University, specialising in Cybersecurity. My focus
              lies in offensive security — understanding how systems are broken
              in order to build better defences.
            </p>
            <p className="font-sans text-lg text-charcoal leading-relaxed">
              My internship experience spans two distinct security domains: SOC
              operations and incident response at Singtel, and OT/ICS risk
              assessment at YTL Powerseraya — one of Singapore's critical energy
              infrastructure operators. Working across both IT and operational
              technology environments has given me a broad perspective on how
              attackers move across different attack surfaces.
            </p>
            <p className="font-sans text-lg text-charcoal leading-relaxed">
              Beyond security, I have built full-stack web applications and
              conducted machine learning research, including LLM fine-tuning for
              domain-specific tasks. I believe strong offensive security
              practitioners benefit from understanding the full stack they are
              targeting.
            </p>
            <p className="font-sans text-lg text-charcoal leading-relaxed">
              Outside of tech, I volunteer with NTU Welfare Services Club,
              working with the deaf community and organising weekly events for
              the elderly. I hold a Singapore Sign Language Level 2
              certification.
            </p>

            <div className="mt-4">
              <p className="font-mono text-base text-accent tracking-widest uppercase mb-4">
                Open To
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  "Offensive Security",
                  "VAPT",
                  "Penetration Testing",
                  "Security Research",
                  "Red Team",
                ].map((role) => (
                  <span
                    key={role}
                    className="font-mono text-sm px-4 py-2 border border-accent text-accent rounded"
                  >
                    {role}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="border border-gray-200 rounded-xl p-6 bg-white flex flex-col gap-5">
              <p className="font-mono text-sm text-accent tracking-widest uppercase">
                Currently
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    Status
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    Final Year, NTU
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    Pursuing
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    OSCP Certification
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    Location
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    Singapore
                  </span>
                </div>
                <div className="w-full h-px bg-gray-200" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    Languages
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    English, Mandarin, Singapore Sign Language
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </SectionWrapper>
      <div className="section-divider" />
    </div>
  );
}
