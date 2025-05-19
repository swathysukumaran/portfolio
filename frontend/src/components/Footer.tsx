import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0e1a2b] text-secondary text-sm">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-2">
        <p className="text-sm text-white font-medium">
          Designed & built by Swathy Sukumaran
        </p>

        <p>
          <a
            href="mailto:swathysukumaran@gmail.com"
            className="text-tertiary hover:underline transition"
          >
            swathysukumaran@gmail.com
          </a>
        </p>
        <p className="text-white">+1 236 777 0562</p>

        <div className="flex justify-center gap-4 pt-2 text-sm text-muted">
          <a
            href="https://github.com/swathysukumaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tertiary transition"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href="https://linkedin.com/in/swathy-sukumaran-v-1190b7233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tertiary transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
