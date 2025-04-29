import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";

function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10">
      <SectionTitle title="Experiences" />

      <div className="flex flex-col md:flex-row gap-8 mt-6">
        {/* Timeline / Selector */}
        <div className="flex md:flex-col gap-4 border-l-2 border-[#135e4c82]">
          {experiences.map((experience, index) => (
            <button
              key={index}
              onClick={() => setSelectedItemIndex(index)}
              className={`text-left text-base sm:text-lg md:text-xl p-4 transition-all duration-200 focus:outline-none ${
                selectedItemIndex === index
                  ? "text-tertiary border-tertiary border-l-4 bg-[#135e4d33] -ml-[2px]"
                  : "text-white hover:text-tertiary"
              }`}
            >
              {experience.period}
            </button>
          ))}
        </div>

        {/* Details */}
        <div className="flex flex-col gap-4 md:pl-6">
          <h2 className="text-secondary text-xl sm:text-2xl font-semibold">
            {experiences[selectedItemIndex].role}
          </h2>
          <h3 className="text-tertiary text-lg sm:text-xl font-medium">
            {experiences[selectedItemIndex].company}
          </h3>
          <p className="text-white text-sm sm:text-base leading-relaxed">
            {experiences[selectedItemIndex].description ??
              "No description available for this role."}
          </p>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
