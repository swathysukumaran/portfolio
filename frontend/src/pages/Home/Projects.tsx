import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <SectionTitle title="Projects" />

      <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-5 rounded-lg shadow-md hover:shadow-xl transition group flex flex-col"
          >
            <div className="h-48 w-full overflow-hidden rounded-md mb-4">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h2 className="text-secondary text-xl font-semibold mb-1">
              {project.name}
            </h2>

            <p className="text-white text-sm leading-relaxed flex-grow">
              {project.description}
            </p>

            <div className="mt-4">
              <p className="text-xs text-gray-400 mb-2 italic">
                Tech Stack: {project.tech.join(", ")}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-400 underline hover:text-blue-300 block"
                >
                  View Live
                </a>
              )}

              {project.caseStudyPath && (
                <a
                  href={project.caseStudyPath}
                  className="text-sm text-yellow-400 underline hover:text-yellow-300 block"
                >
                  Read Case Study
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
