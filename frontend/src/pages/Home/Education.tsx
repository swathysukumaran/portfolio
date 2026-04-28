import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";

const education = [
  {
    degree: "Postgraduate Diploma – Digital Design + Development",
    institution: "North Island College, British Columbia, Canada",
    period: "2023 – 2025",
  },
  {
    degree: "Master's in Computer Engineering",
    institution: "Malabar Engineering College, Kerala, India",
    period: "2019 – 2021",
  },
  {
    degree: "BTech in Information Technology",
    institution: "M.E.S. Engineering College, Kerala, India",
    period: "2009 – 2013",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-16 py-28 max-w-6xl mx-auto">
      <SectionTitle title="Education" />

      <div className="relative ml-2 md:ml-4 pl-8 md:pl-12 border-l border-border space-y-10">
        {education.map((item, index) => (
          <motion.div
            key={index}
            className="relative"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute -left-[37px] md:-left-[49px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />

            <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
              <h3 className="text-base font-semibold font-heading text-text">
                {item.degree}
              </h3>
              <p className="text-accent text-sm mt-1 font-body">{item.institution}</p>
              <p className="text-muted text-xs italic mt-1 font-body">{item.period}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
