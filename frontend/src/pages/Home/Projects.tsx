import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../components/SectionTitle";
import { fetchProjects, type Project } from "../../lib/api";
import { imageMap } from "../../lib/images";
import { fallbackProjects } from "../../resources/projects";

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setProjects(fallbackProjects))
      .finally(() => setLoading(false));
  }, []);

  return (
    <section id="projects" className="px-6 md:px-16 py-28 max-w-6xl mx-auto">
      <SectionTitle title="Projects" />

      {loading && (
        <div className="grid md:grid-cols-2 gap-5">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-64 rounded-2xl bg-surface border border-border animate-pulse"
            />
          ))}
        </div>
      )}

      {!loading && (
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={project._id}
              className="group relative bg-surface border border-border rounded-2xl overflow-hidden flex flex-col hover:border-accent/30 transition-colors duration-300"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {project.inProgress && (
                <div className="absolute top-4 right-4 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  In Progress
                </div>
              )}

              {project.imageKey && imageMap[project.imageKey] && (
                <div className="h-48 overflow-hidden bg-border/40">
                  <img
                    src={imageMap[project.imageKey]}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              <div className="p-6 flex flex-col gap-4 flex-1">
                <div>
                  <h3 className="text-base font-semibold font-heading text-text">
                    {project.name}
                  </h3>
                  {project.tech && project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[11px] px-2 py-0.5 rounded bg-border text-muted font-body"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {project.description && (
                  <p className="text-sm text-muted leading-relaxed font-body flex-1">
                    {project.description}
                  </p>
                )}

                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.repo && (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full border border-border text-muted hover:border-accent hover:text-accent transition text-xs font-medium font-body"
                    >
                      GitHub
                    </a>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 rounded-full bg-accent text-bg hover:bg-accent/90 transition text-xs font-medium font-body"
                    >
                      Live Site
                    </a>
                  )}
                  {project.caseStudyPath && (
                    <a
                      href={project.caseStudyPath}
                      className="px-4 py-1.5 rounded-full border border-accent/40 text-accent hover:bg-accent hover:text-bg transition text-xs font-medium font-body"
                    >
                      Case Study →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
