import { meta } from "../../data/meta";
import { Github, Linkedin, Mail } from "lucide-react";
import BackToTop from "../ui/BackToTop";

export default function Footer() {
  return (
    <>
      <BackToTop />
      <footer className="border-t border-gray-200 bg-base px-6 md:px-16 lg:px-32 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-sm text-muted">
            {meta.name} · {new Date().getFullYear()}
          </span>
          <div className="flex items-center gap-6">
            <a
              href={"mailto:" + meta.email}
              className="text-muted hover:text-accent transition-colors"
            >
              <Mail size={18} />
            </a>
            <a
              href={meta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={meta.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Github size={18} />
            </a>
          </div>
          <span className="font-mono text-xs text-muted">
            Offensive Security · VAPT · GPEN
          </span>
        </div>
      </footer>
    </>
  );
}
