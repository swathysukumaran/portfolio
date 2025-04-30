import React from "react";
import SectionTitle from "../../components/SectionTitle";
import profilePic from "../../assets/profile.jpeg";

function About() {
  const skills = [
    "JavaScript",
    "React",
    "TypeScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ];

  return (
    <section className="w-full px-4 py-10 sm:px-6 md:px-10" id="about">
      <SectionTitle title="About Me" />

      <div className="flex flex-col md:flex-row items-center gap-8 mt-8">
        {/* Text Section */}
        <div className="md:w-2/3 flex flex-col gap-6">
          <p className="text-white text-base sm:text-lg leading-relaxed">
            I'm Swathy Sukumaran Vadakkath — a passionate full-stack developer
            with a focus on building clean, responsive, and user-centered
            applications. I have professional experience in the MERN stack and a
            strong academic foundation in digital design and development.
          </p>

          <p className="text-white text-base sm:text-lg leading-relaxed">
            Whether it's creating intuitive user interfaces or architecting
            scalable backend services, I love turning complex problems into
            elegant solutions. I'm constantly learning and looking for
            opportunities to grow, collaborate, and build meaningful digital
            experiences.
          </p>

          <div>
            <h2 className="text-tertiary text-xl font-medium mb-3">
              Technologies I've been working with recently:
            </h2>
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="text-tertiary border border-tertiary px-4 py-2 rounded text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/3 w-full max-w-xs overflow-hidden rounded-lg shadow-md">
          <img
            src={profilePic}
            alt="Profile of Swathy"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
