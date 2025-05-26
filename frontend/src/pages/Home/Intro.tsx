import profilePic from "../../assets/swathy.jpg";

export default function Intro() {
  return (
    <section
      id="intro"
      className="min-h-[90vh] flex flex-col justify-center px-6 md:px-24 py-20 mt-10 max-w-7xl mx-auto bg-bg text-text font-body"
    >
      <span className="text-sm tracking-widest uppercase text-accent mb-4">
        Full-stack developer. Builder. Problem-solver.
      </span>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-primary">
            Hi, I’m Swathy.
          </h1>
          <p className="text-xl mt-4 text-zinc-700 max-w-2xl">
            I design and build thoughtful, human-centered web applications —
            blending code and creativity to solve real problems.
          </p>
          <p className="text-base mt-6 text-zinc-600 max-w-xl">
            I love turning vague ideas into intuitive tools — from AI-powered
            travel planners to client-driven platforms. I care about clean code,
            user empathy, and making things feel simple.
          </p>

          <a
            href="#projects"
            className="mt-8 inline-block bg-accent text-text px-6 py-3 rounded-full font-medium text-sm shadow hover:scale-105 hover:shadow-lg transition"
          >
            Explore My Work
          </a>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Swathy"
            className="w-56 h-56 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
