import React from "react";
import SectionTitle from "../../components/SectionTitle";
import profilePic from "../../assets/profile.jpeg";
function About() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ];
  return (
    <div>
      <SectionTitle title="About" />
      <div className="flex w-full items-center gap-5">
        <div className="h-[70vh] w-1/2 overflow-hidden">
          <img
            src={profilePic}
            alt="A lady with laptop"
            className="h-full w-full object-top"
          />
        </div>
        <div className="flex flex-col gap-5 w-1/2">
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
            commodi eos libero iusto fugit eaque blanditiis dolorum praesentium
            nisi, ratione quaerat eligendi, nesciunt quod. Accusamus, rem
            recusandae ipsa repellat vero expedita est consequuntur fugiat. Sit,
            unde nesciunt labore numquam exercitationem{" "}
          </p>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod,
            assumenda reiciendis ipsa, qui nam quaerat, distinctio rerum numquam
            corrupti nisi quia. Rem culpa deserunt atque dolores, quas nulla
            repellendus nostrum? Repellendus corporis reiciendis hic esse nihil
            sed nam illo aliquam maiores est eum nulla vel delectus, provident
            dolorem aliquid sit architecto facere vero officiis possimus. Fugit
            asperiores nobis ab repellendus!
          </p>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I've been working with recently:
        </h1>
        <div className="flex flex-wrap gap-10">
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-10">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
