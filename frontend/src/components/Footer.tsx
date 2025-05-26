export default function Footer() {
  return (
    <footer className="bg-[#f3f3f3] text-text text-sm border-t border-zinc-800 mt-24 font-body">
      <div className="max-w-7xl mx-auto px-6 py-10 text-center space-y-3">
        {/* Logo or Name */}
        <p className="text-base font-medium text-primary font-heading">
          Designed & built by Swathy Sukumaran
        </p>

        {/* Email */}
        <p>
          <a
            href="mailto:swathysukumaran@gmail.com"
            className="text-accent hover:underline transition"
          >
            swathysukumaran@gmail.com
          </a>
        </p>

        {/* Phone  */}
        <p className="text-zinc-400">+1 236 777 0562</p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 pt-2 text-sm">
          <a
            href="https://github.com/swathysukumaran"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent transition"
          >
            GitHub
          </a>
          <span className="text-zinc-500">•</span>
          <a
            href="https://linkedin.com/in/swathy-sukumaran-v-1190b7233"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-accent transition"
          >
            LinkedIn
          </a>
        </div>

        {/* Year */}
        <p className="text-xs text-zinc-600 pt-3">
          © {new Date().getFullYear()} Swathy Sukumaran Vadakkath
        </p>
      </div>
    </footer>
  );
}
