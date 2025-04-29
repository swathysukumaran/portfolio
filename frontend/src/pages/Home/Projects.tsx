import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

function Projects() {
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <SectionTitle title="Projects" />

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Project Selector */}
        <div className="flex md:flex-col gap-4 border-l-2 border-[#135e4c82]">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => setSelectedProjectIndex(index)}
              className={`text-left text-base sm:text-lg md:text-xl p-4 transition-all duration-200 focus:outline-none ${
                selectedProjectIndex === index
                  ? "text-tertiary border-tertiary border-l-4 bg-[#135e4d33] -ml-[2px]"
                  : "text-white hover:text-tertiary"
              }`}
            >
              {project.name}
            </button>
          ))}
        </div>

        {/* Project Details */}
        <div className="flex flex-col gap-4 md:pl-6">
          <h2 className="text-secondary text-xl sm:text-2xl font-semibold">
            {projects[selectedProjectIndex].name}
          </h2>
          <h3 className="text-tertiary text-lg sm:text-xl font-medium">
            Tech Stack: {projects[selectedProjectIndex].tech.join(", ")}
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {projects[selectedProjectIndex].description}
          </p>
          {projects[selectedProjectIndex].link && (
            <a
              href={projects[selectedProjectIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-400 underline hover:text-blue-300"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Projects;
