import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  return (
    <section
      className="w-full px-6 md:px-24 py-20 bg-primary text-secondary"
      id="projects"
    >
      <SectionTitle title="Projects" />

      <div className="mt-14 grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-surface rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-cover"
              />
            )}

            {/* Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-secondary">
                  {project.name}
                </h3>
                {project.tech && (
                  <p className="text-sm text-muted italic mt-1">
                    Built with: {project.tech.join(", ")}
                  </p>
                )}
              </div>

              <p className="text-base leading-relaxed text-secondary flex-grow">
                {project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-2">
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-button text-white text-sm px-4 py-2 rounded-full hover:opacity-90 transition"
                  >
                    View Live
                  </a>
                )}
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm px-4 py-2 rounded-full border border-tertiary text-tertiary hover:bg-tertiary hover:text-primary transition"
                  >
                    GitHub
                  </a>
                )}
                {project.caseStudyPath && (
                  <a
                    href={project.caseStudyPath}
                    className="text-sm px-4 py-2 rounded-full border border-yellow-500 text-yellow-500 hover:bg-yellow-400 hover:text-white transition"
                  >
                    Case Study
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
