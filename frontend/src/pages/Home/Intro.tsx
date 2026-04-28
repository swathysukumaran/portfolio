import { motion } from "framer-motion";
import profilePic from "../../assets/swathy.jpg";

export default function Intro() {
  return (
    <section
      id="intro"
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 overflow-hidden"
      style={{
        backgroundImage:
          "radial-gradient(circle, #1c1c22 1.5px, transparent 1.5px)",
        backgroundSize: "30px 30px",
      }}
    >
      {/* Glow blob */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-accent/8 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-accent/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/25 bg-accent/8 text-accent text-xs font-body">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Open to opportunities
          </span>
        </motion.div>

        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          {/* Text */}
          <div className="flex-1 min-w-0">
            <motion.p
              className="text-muted text-sm tracking-widest uppercase mb-3 font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="text-5xl md:text-7xl font-heading font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Swathy
              <br />
              <span className="text-accent">Sukumaran</span>
            </motion.h1>

            <motion.p
              className="mt-4 text-base md:text-lg text-muted max-w-lg leading-relaxed font-body"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
            >
              Full-stack developer. I build thoughtful, human-centered web
              applications — blending clean code with real empathy for users.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-accent text-bg rounded-full font-medium text-sm hover:bg-accent/90 transition font-body"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-border text-text rounded-full font-medium text-sm hover:border-accent hover:text-accent transition font-body"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Photo */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <div className="absolute inset-0 rounded-full border border-accent/20 scale-110" />
              <div className="absolute inset-0 rounded-full border border-accent/10 scale-125" />
              <img
                src={profilePic}
                alt="Swathy"
                className="relative w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition duration-700"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/50 text-xs font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <span className="tracking-widest uppercase text-[10px]">scroll</span>
        <motion.div
          className="w-px h-8 bg-muted/30 origin-top"
          animate={{ scaleY: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
