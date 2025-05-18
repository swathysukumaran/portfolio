import React from "react";
import profilePic from "../../assets/profile.jpeg"; // replace with actual image

export default function Intro() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center gap-8 px-6 md:px-24 py-20 bg-primary text-secondary">
      <span className="text-sm tracking-wider uppercase text-tertiary">
        Building with care & clarity
      </span>

      <div className="flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text Block */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold leading-snug tracking-tight max-w-3xl">
            Hello, I’m Swathy —
            <br />
            a full-stack developer who believes
            <br className="hidden md:block" />
            great software should feel simple.
          </h1>

          <p className="text-lg leading-relaxed mt-4 max-w-2xl">
            I work across the stack to create accessible, thoughtful websites
            and tools. I’m currently looking to join a team where I can
            contribute meaningfully and grow.
          </p>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 rounded-full bg-button text-white text-sm font-medium shadow-md hover:shadow-lg transition hover:scale-105"
          >
            Explore My Work
          </a>
        </div>

        {/* Profile Image Block */}
        <div className="flex-shrink-0 w-full md:w-[280px]">
          <img
            src={profilePic}
            alt="Swathy Sukumaran"
            className="rounded-2xl shadow-lg object-cover w-full h-auto max-h-[380px]"
          />
        </div>
      </div>
    </section>
  );
}
