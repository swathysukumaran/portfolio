import SectionTitle from "../../components/SectionTitle";

function Education() {
  const education = [
    {
      degree: "Postgraduate Diploma – Digital Design + Development",
      institution: "North Island College, British Columbia, Canada",
      period: "2023 – 2025 ",
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
      className="w-full px-6 md:px-24 py-20 bg-primary text-secondary"
    >
      <SectionTitle title="Education" />

      <div className="mt-10 relative   space-y-10">
        {education.map((item, index) => (
          <div key={index} className="relative group">
            {/* <span className="absolute -left-3 top-2 w-4 h-4 bg-tertiary rounded-full shadow-md"></span> */}
            <div className="bg-surface p-5 rounded-lg shadow-sm">
              <h3 className="text-tertiary font-semibold text-lg">
                {item.degree}
              </h3>
              <p className="text-sm">{item.institution}</p>
              <p className="text-muted text-xs italic">{item.period}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
