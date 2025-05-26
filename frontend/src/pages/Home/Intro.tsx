import profilePic from "../../assets/swathy.jpg";

export default function Intro() {
  return (
    <section
      id="intro"
      className="flex flex-col justify-center px-6 md:px-24 py-12 mt-16 max-w-7xl mx-auto bg-bg text-text font-body"
    >
      <span className="text-sm tracking-widest uppercase text-accent mb-2">
        Full-stack developer. Builder. Problem-solver.
      </span>

      <div className="flex flex-col-reverse md:flex-row items-center gap-6 md:gap-10">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight tracking-tight text-primary">
            Hi, I’m Swathy.
          </h1>
          <p className="text-lg mt-3 text-zinc-700 max-w-2xl">
            I design and build thoughtful, human-centered web applications —
            blending code and creativity to solve real problems.
          </p>
          <p className="text-base mt-4 text-zinc-600 max-w-xl">
            I care about clean code, user empathy, and turning vague ideas into
            intuitive tools. Currently looking for a team where I can contribute
            and grow.
          </p>
          <a
            href="#projects"
            className="mt-5 inline-block bg-accent text-text px-6 py-3 rounded-full font-medium text-sm shadow hover:scale-105 hover:shadow-lg transition"
          >
            Explore My Work
          </a>
        </div>

        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Swathy"
            className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
