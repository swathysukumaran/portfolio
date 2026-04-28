import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Angular",
  "Tailwind CSS",
  "HTML & CSS",
  "Java",
];

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-28 max-w-6xl mx-auto">
      <SectionTitle title="About Me" />

      <div className="grid md:grid-cols-5 gap-12 md:gap-20 items-start">
        {/* Bio */}
        <motion.div
          className="md:col-span-3 space-y-5 text-muted leading-relaxed text-base font-body"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p>
            I'm someone who finds joy in making things work — especially when
            they don't at first. I enjoy the quiet thrill of solving bugs,
            learning new tools, and that moment when hours of stuckness suddenly
            turns into{" "}
            <span className="text-accent font-medium">"it's working!!!"</span>
          </p>
          <p>
            Good software, to me, isn't just about code — it's about real people
            being able to use it comfortably. I care about building things that
            feel smooth, clear, and helpful.
          </p>
          <p>
            Outside of coding, I'm a mom and a lifelong reader. I value calm,
            kindness, and curiosity — and I try to bring all three into my work.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          className="md:col-span-2"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <p className="text-xs text-muted uppercase tracking-widest mb-4 font-body">
            Tech Stack
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="text-xs px-3 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition cursor-default font-body"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
