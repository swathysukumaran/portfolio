import { useState } from "react";
import swathyLogo from "../assets/swathy-logo.png";
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Education", href: "/#education" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-bg/70 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
        {/* Logo */}
        <a href="/#intro" className="flex items-center gap-2">
          <img
            src={swathyLogo}
            alt="Swathy Logo"
            className="h-10 w-auto object-contain"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center font-body">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-text hover:text-accent transition"
            >
              <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-2xl text-text hover:scale-110 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden bg-bg text-text shadow-md px-6 py-4 flex flex-col gap-4 font-body">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium hover:text-accent transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
