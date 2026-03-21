import SectionWrapper from "../ui/SectionWrapper";
import { motion } from "framer-motion";
import { meta } from "../../data/meta";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="bg-base">
      <div className="mb-12">
        <p className="font-mono text-base text-accent tracking-widest uppercase mb-3">
          Get In Touch
        </p>
        <h2 className="font-sans text-6xl font-bold text-charcoal">Contact</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <p className="font-sans text-xl text-charcoal leading-relaxed">
            I am actively seeking opportunities in offensive security, VAPT, and
            security research. If you have a role, collaboration, or just want
            to connect — feel free to reach out.
          </p>
          <p className="font-mono text-base text-muted">
            I typically respond within 24 hours.
          </p>
          <a
            href={"mailto:" + meta.email}
            className="font-sans text-base px-6 py-3 bg-charcoal text-white hover:bg-accent transition-colors duration-300 rounded w-fit"
          >
            Send an Email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="flex flex-col gap-4"
        >
          <div className="border border-gray-200 rounded-xl overflow-hidden">
            <a
              href={"mailto:" + meta.email}
              className="flex items-center justify-between px-6 py-5 bg-base hover:bg-surface transition-colors duration-200 border-b border-gray-200"
            >
              <div className="flex items-center gap-4">
                <Mail size={20} className="text-accent" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    Email
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    {meta.email}
                  </span>
                </div>
              </div>
              <span className="font-mono text-sm text-accent">--</span>
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-5 bg-base hover:bg-surface transition-colors duration-200 border-b border-gray-200"
            >
              <div className="flex items-center gap-4">
                <Linkedin size={20} className="text-accent" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    LinkedIn
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    Lau Yi Xue
                  </span>
                </div>
              </div>
              <span className="font-mono text-sm text-accent">--</span>
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between px-6 py-5 bg-base hover:bg-surface transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <Github size={20} className="text-accent" />
                <div className="flex flex-col gap-1">
                  <span className="font-mono text-xs text-muted uppercase tracking-wide">
                    GitHub
                  </span>
                  <span className="font-sans text-base text-charcoal">
                    oldonesnow
                  </span>
                </div>
              </div>
              <span className="font-mono text-sm text-accent">--</span>
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
