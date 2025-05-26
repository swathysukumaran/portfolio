import SectionTitle from "../../components/SectionTitle";
import profilePic from "../../assets/swathy.jpg";

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

export default function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg)] text-[var(--color-text)] px-6 md:px-24 py-24 max-w-7xl mx-auto"
    >
      <SectionTitle title="About Me" />

      <div className="mt-16 flex flex-col md:flex-row items-center gap-12">
        {/* 🖼 Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={profilePic}
            alt="Swathy"
            className="w-64 h-64 rounded-full object-cover shadow-md"
          />
        </div>

        {/* 📝 Right: Text */}
        <div className="flex-1 text-base md:text-lg leading-relaxed space-y-6">
          <p>
            I’m someone who finds joy in making things work — especially when
            they don’t at first. I enjoy the quiet thrill of solving bugs,
            learning new tools, and that moment when hours of stuckness suddenly
            turn into{" "}
            <span className="text-[var(--color-primary)] font-medium">
              “it’s working!!!”
            </span>
          </p>

          <p>
            For me, good software isn’t just about code — it’s about real people
            being able to use it comfortably. I care about building things that
            feel smooth, clear, and helpful.
          </p>

          <p>
            Outside of coding, I’m a mom and a lifelong reader. I value calm,
            kindness, and curiosity — and I try to bring that into my work.
          </p>

          {/* 💻 Skills Grid */}
          <div>
            <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-4">
              Tech Stack
            </h3>
            <ul className="flex flex-wrap gap-3 text-sm font-medium">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="bg-[var(--color-accent)] text-[var(--color-text)] px-4 py-1 rounded-full shadow-sm"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
