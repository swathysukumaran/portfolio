import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "/#about", id: "about" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["intro", "about", "experience", "education", "projects", "contact"];
    const observers = ids.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a
          href="/#intro"
          className="text-accent font-heading font-bold text-xl tracking-tight"
        >
          SS
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href, id }) => {
            const isActive = activeSection === id;
            return (
              <a
                key={label}
                href={href}
                className={`text-sm transition-colors duration-200 relative pb-0.5 ${
                  isActive ? "text-accent" : "text-muted hover:text-text"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-px bg-accent rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-muted hover:text-text transition p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-surface border-b border-border px-6 py-6 flex flex-col gap-5">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-sm text-muted hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
