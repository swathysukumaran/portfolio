import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

export default function Experiences() {
  return (
    <section
      id="experience"
      className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto"
    >
      <SectionTitle title="Experience" />

      <div className="mt-16 space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-white border border-primary shadow-sm rounded-xl p-6 space-y-2 max-w-4xl mx-auto"
          >
            <div className="flex justify-between flex-wrap gap-2 items-center">
              <h3 className="text-xl font-semibold text-primary font-heading">
                {exp.role}
              </h3>
              <span className="text-sm italic text-gray-500">{exp.period}</span>
            </div>
            <p className="text-lg font-medium font-heading">{exp.company}</p>
            {exp.description && (
              <p className="text-base leading-relaxed mt-2 text-zinc-700 font-body">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
