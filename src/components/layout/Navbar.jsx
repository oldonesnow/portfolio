import { useEffect, useState } from "react";
import { meta } from "../../data/meta";

const navLinks = [
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Credentials", href: "#certifications", id: "certifications" },
  { label: "Skills", href: "#skills", id: "skills" },
  { label: "About", href: "#about", id: "about" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress((scrollTop / docHeight) * 100);
      setScrolled(scrollTop > 80);

      const sections = navLinks.map((link) => document.getElementById(link.id));
      const current = sections.findIndex((section) => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      setActiveSection(current >= 0 ? navLinks[current].id : "");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent")
      }
    >
      {/* Scroll progress bar */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-accent transition-all duration-150"
        style={{ width: progress + "%" }}
      />

      <nav className="px-6 md:px-16 lg:px-32 h-16 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => handleNavClick(e, "#")}
          className="font-mono text-sm font-medium tracking-widest text-charcoal hover:text-accent transition-colors"
        >
          Portfolio - Yi Xue
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={
                  "font-sans text-sm transition-colors duration-200 " +
                  (activeSection === link.id
                    ? "text-accent font-medium"
                    : "text-muted hover:text-charcoal")
                }
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="block h-0.5 bg-accent mt-0.5 rounded-full" />
                )}
              </a>
            </li>
          ))}
          <li>
            <a
              href={meta.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white transition-all duration-200 rounded"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={
              "block w-5 h-0.5 bg-charcoal transition-all duration-300 " +
              (menuOpen ? "rotate-45 translate-y-2" : "")
            }
          />
          <span
            className={
              "block w-5 h-0.5 bg-charcoal transition-all duration-300 " +
              (menuOpen ? "opacity-0" : "")
            }
          />
          <span
            className={
              "block w-5 h-0.5 bg-charcoal transition-all duration-300 " +
              (menuOpen ? "-rotate-45 -translate-y-2" : "")
            }
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-base/95 backdrop-blur-md border-t border-gray-200 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={
                "font-sans text-sm transition-colors " +
                (activeSection === link.id
                  ? "text-accent font-medium"
                  : "text-muted hover:text-charcoal")
              }
            >
              {link.label}
            </a>
          ))}
          <a
            href={meta.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs px-4 py-2 border border-accent text-accent w-fit rounded"
          >
            Resume
          </a>
        </div>
      )}
    </header>
  );
}
