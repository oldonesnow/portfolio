import { useEffect, useState } from "react";
import { meta } from "../../data/meta";

const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-base/90 backdrop-blur-md border-b border-gray-200 shadow-sm"
          : "bg-transparent")
      }
    >
      <nav className="px-6 md:px-16 lg:px-32 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-widest text-charcoal hover:text-accent transition-colors"
        >
          LYX
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-sans text-sm text-muted hover:text-charcoal transition-colors duration-200"
              >
                {link.label}
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
              onClick={() => setMenuOpen(false)}
              className="font-sans text-sm text-muted hover:text-charcoal transition-colors"
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
