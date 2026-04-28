export default function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <p className="font-heading font-semibold text-text">Swathy Sukumaran</p>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/swathysukumaran"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/swathy-sukumaran-v-1190b7233"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition"
          >
            LinkedIn
          </a>
          <a
            href="mailto:swathysukumaran@gmail.com"
            className="hover:text-accent transition"
          >
            Email
          </a>
        </div>

        <p className="text-xs text-muted/60">
          © {new Date().getFullYear()} Swathy Sukumaran Vadakkath
        </p>
      </div>
    </footer>
  );
}
