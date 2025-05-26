import profilePic from "../../assets/swathy.jpg";

export default function Intro() {
  return (
    <section
      className="min-h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 mt-10 max-w-7xl mx-auto bg-[var(--color-bg)] text-[var(--color-text)]"
      id="intro"
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* 👤 Text Block */}
        <div className="flex-1 text-left">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight font-[var(--font-heading)] text-[var(--color-primary)]">
            Hi, I’m Swathy.
          </h1>
          <h2 className="text-2xl font-medium mt-3 font-[var(--font-heading)]">
            I craft meaningful experiences as a full-stack web developer.
          </h2>
          <p className="text-base md:text-lg mt-6 max-w-xl font-[var(--font-body)] leading-relaxed">
            I bring together clean code, user empathy, and real-world problem
            solving — currently looking for a team where I can contribute and
            grow.
          </p>
          <a
            href="#projects"
            className="mt-8 inline-block bg-[var(--color-accent)] text-[var(--color-text)] px-6 py-3 rounded-full font-medium text-sm shadow hover:scale-105 hover:shadow-lg transition"
          >
            Explore My Work
          </a>
        </div>

        {/* 🖼️ Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Swathy profile"
            className="w-56 h-56 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
