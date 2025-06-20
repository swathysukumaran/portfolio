import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto"
    >
      <SectionTitle title="Projects" />

      <div className="mt-16 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative bg-white border border-primary rounded-xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
          >
            {/* 🚧 Badge */}
            {project.inProgress && (
              <div className="absolute top-4 right-4 z-10 bg-yellow-100 text-yellow-800 text-xs font-medium px-3 py-1 rounded-full">
                Currently working on
              </div>
            )}

            {/* 🖼️ Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-52 object-contain bg-zinc-100"
              />
            )}

            {/* 📄 Content */}
            <div className="p-6 flex flex-col gap-4 flex-grow">
              <div>
                <h3 className="text-xl font-semibold text-primary font-heading">
                  {project.name}
                </h3>

                {project.tech && Array.isArray(project.tech) && (
                  <p className="text-sm italic text-zinc-500 mt-1 font-body">
                    Built with: {project.tech.join(", ")}
                  </p>
                )}
              </div>

              {project.description && (
                <p className="text-sm text-zinc-700 font-body leading-relaxed">
                  {project.description}
                </p>
              )}

              {/* 🔗 Links */}
              <div className="mt-auto flex gap-4 text-sm font-medium">
                {project.repo && (
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-primary text-white rounded-full hover:brightness-110 transition"
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-accent text-text rounded-full hover:brightness-110 transition"
                  >
                    Live Site
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
