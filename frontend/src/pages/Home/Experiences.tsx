import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { fetchExperiences, type Experience } from "../../lib/api";

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchExperiences()
      .then(setExperiences)
      .catch(() => setError("Could not load experience data."))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="experience" className="px-6 md:px-16 py-28 max-w-6xl mx-auto">
      <SectionTitle title="Experience" />

      {loading && (
        <div className="space-y-6 ml-2 md:ml-4 pl-8 border-l border-border">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-28 rounded-xl bg-surface border border-border animate-pulse"
            />
          ))}
        </div>
      )}

      {error && <p className="text-muted text-sm">{error}</p>}

      {!loading && !error && (
        <div className="relative ml-2 md:ml-4 pl-8 md:pl-12 border-l border-border space-y-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp._id}
              className="relative"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="absolute -left-[37px] md:-left-[49px] top-6 w-3 h-3 rounded-full bg-accent ring-4 ring-bg" />

              <div className="bg-surface border border-border rounded-xl p-6 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-base font-semibold font-heading text-text">
                      {exp.role}
                    </h3>
                    <p className="text-accent text-sm mt-0.5 font-body">
                      {exp.company}
                    </p>
                  </div>
                  <span className="text-muted text-xs italic shrink-0 mt-1 font-body">
                    {exp.period}
                  </span>
                </div>
                {exp.description && (
                  <p className="text-muted text-sm leading-relaxed font-body">
                    {exp.description}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
