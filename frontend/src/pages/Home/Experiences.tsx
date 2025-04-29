import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import { experiences } from "../../resources/experiences";
function Experiences() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  return (
    <div>
      <SectionTitle title="Experiences" />
      <div className="flex py-10">
        <div className="flex flex-col gap-5 border-l-2  border-[#135e4c82]">
          {experiences.map((experience, index) => (
            <div
              className=" cursor-pointer"
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              key={index}
            >
              <h1
                className={`text-xl p-5 ${
                  selectedItemIndex === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#135e4d86]"
                    : "text-white"
                } text-white`}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
