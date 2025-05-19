import { useState } from "react";

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-primary/70 backdrop-blur-md  transition-all">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/#intro">
          <span className="font-extrabold text-2xl text-tertiary">SSV</span>
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative text-sm text-secondary hover:text-tertiary transition"
            >
              <span className="relative after:content-[''] after:absolute after:w-0 after:h-[1px] after:left-0 after:-bottom-1 after:bg-tertiary after:transition-all after:duration-300 hover:after:w-full">
                {link.label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-tertiary text-2xl transition-transform hover:scale-110"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mx-4 mt-2 rounded-xl border border-muted bg-surface px-6 py-4 shadow-md flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-secondary hover:text-tertiary transition"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
