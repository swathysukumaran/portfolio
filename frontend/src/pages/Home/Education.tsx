import SectionTitle from "../../components/SectionTitle";

export default function Education() {
  const education = [
    {
      degree: "Postgraduate Diploma – Digital Design + Development",
      institution: "North Island College, British Columbia, Canada",
      period: "2023 – 2025",
    },
    {
      degree: "Master’s in Computer Engineering",
      institution: "Malabar Engineering College, Kerala, India",
      period: "2019 – 2021",
    },
    {
      degree: "BTech in Information Technology",
      institution: "M.E.S. Engineering College, Kerala, India",
      period: "2009 – 2013",
    },
  ];

  return (
    <section
      id="education"
      className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto"
    >
      <SectionTitle title="Education" />

      <div className="mt-16 space-y-10 max-w-4xl mx-auto">
        {education.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-primary rounded-xl p-6 shadow-sm"
          >
            <h3 className="text-lg md:text-xl font-semibold text-primary font-heading">
              {item.degree}
            </h3>
            <p className="text-base md:text-lg mt-1 font-body">
              {item.institution}
            </p>
            <p className="text-sm italic text-zinc-500 mt-1">{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
