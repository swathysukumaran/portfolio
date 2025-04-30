import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <SectionTitle title="Experience" />

      <div className="mt-8 space-y-10 relative border-l-2 border-tertiary pl-6">
        {experiences.map((exp, index) => (
          <div key={index} className="relative group">
            {/* Dot Marker */}
            <span className="absolute -left-3 top-2 w-4 h-4 bg-tertiary rounded-full shadow-md"></span>

            {/* Card Content */}
            <div className="bg-surface p-5 rounded-lg shadow-md hover:shadow-xl transition">
              <h3 className="text-xl text-secondary font-semibold">
                {exp.role}
              </h3>
              <h4 className="text-tertiary text-md font-medium">
                {exp.company}
              </h4>
              <span className="text-gray-400 text-sm italic">{exp.period}</span>
              <p className="text-white mt-3 text-sm leading-relaxed">
                {exp.description ?? "No description provided for this role."}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
