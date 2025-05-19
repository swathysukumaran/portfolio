import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  return (
    <section
      className="w-full px-6 md:px-24 py-20 bg-primary text-secondary"
      id="experience"
    >
      <SectionTitle title="Experience" />

      <div className="mt-12 max-w-4xl  flex flex-col gap-14">
        {experiences.map((exp, index) => (
          <div key={index} className="flex flex-col gap-2">
            <h3 className="text-tertiary text-lg font-medium">{exp.company}</h3>

            <p className="text-xl font-semibold text-secondary">{exp.role}</p>

            <span className="text-sm text-muted italic">{exp.period}</span>

            {exp.description && (
              <p className="text-base leading-relaxed text-secondary mt-2">
                {exp.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
