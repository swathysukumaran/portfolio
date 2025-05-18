import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ];

  return (
    <section
      className="w-full px-6 md:px-24 py-24 bg-primary text-secondary"
      id="about"
    >
      <SectionTitle title="About Me" />

      <div className="mt-12 max-w-4xl  flex flex-col gap-8 text-base sm:text-lg leading-relaxed">
        <p className="text-secondary">
          I’m someone who finds joy in making things work — especially when they
          don’t at first. I enjoy the quiet thrill of solving bugs, learning new
          tools, and that moment when hours of stuckness suddenly turn into
          <span className="text-tertiary font-medium"> “it’s working!!!”</span>
        </p>

        <p className="text-secondary">
          For me, good software isn’t just about code — it’s about real people
          being able to use it comfortably. I care about building things that
          feel smooth, clear, and helpful.
        </p>

        <p className="text-secondary">
          Outside of coding, I’m a mom and a lifelong reader. I value calm,
          kindness, and staying curious — and I try to bring that into the way I
          work too.
        </p>

        <div className="mt-6">
          <h2 className="text-tertiary text-lg sm:text-xl font-medium mb-4">
            Tools and technologies I use:
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="text-tertiary border border-tertiary px-4 py-2 rounded-full text-sm hover:bg-tertiary hover:text-primary transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
