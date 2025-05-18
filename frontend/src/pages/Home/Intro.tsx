import React from "react";
import profilePic from "../../assets/profile.jpeg"; // or a dev-themed illustration

function Intro() {
  return (
    <section className="bg-primary px-4 sm:px-6 md:px-10 py-20 min-h-screen flex flex-col-reverse md:flex-row items-center gap-10">
      {/* Text Content */}
      <div className="md:w-1/2 text-left flex flex-col gap-6">
        <p className="text-tertiary text-lg sm:text-xl font-medium">Hi, I’m</p>
        <h1 className="text-secondary text-4xl sm:text-5xl font-bold leading-tight">
          Swathy Sukumaran Vadakkath
        </h1>
        <h2 className=" text-2xl sm:text-3xl font-semibold">
          I craft modern, meaningful web experiences.
        </h2>
        <p className=" text-sm sm:text-base leading-relaxed max-w-md">
          A full-stack developer with a passion for turning ideas into
          accessible and efficient digital solutions. My work blends
          functionality, clarity, and a love for well-crafted UI.
        </p>
        <div>
          <a
            href="#projects"
            className="inline-block mt-4 bg-tertiary text-primary font-bold px-6 py-3 rounded hover:bg-opacity-90 transition"
          >
            See My Work
          </a>
        </div>
      </div>

      {/* Image / Illustration */}
      <div className="md:w-1/2 w-full max-w-sm">
        <img
          src={profilePic}
          alt="Swathy working on laptop"
          className="w-full h-auto rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}

export default Intro;
