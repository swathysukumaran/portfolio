import React from "react";

function Intro() {
  return (
    <section className="min-h-screen bg-primary flex flex-col items-start justify-center gap-6 px-4 sm:px-10 py-16">
      <h1 className="text-white text-xl sm:text-2xl">Hi, I am</h1>

      <h2 className="text-4xl sm:text-6xl text-secondary font-bold">
        Swathy Sukumaran Vadakkath
      </h2>

      <h3 className="text-2xl sm:text-4xl text-white font-semibold">
        I build things for the Web
      </h3>

      <p className="text-white max-w-xl text-sm sm:text-base leading-relaxed">
        I'm a full-stack web developer passionate about crafting responsive,
        accessible, and user-friendly applications. With a strong foundation in
        the MERN stack and a love for thoughtful UI, I bring ideas to life on
        the browser.
      </p>

      <button className="mt-4 border-2 border-tertiary text-tertiary px-8 py-3 rounded hover:bg-tertiary hover:text-white transition">
        View My Work
      </button>
    </section>
  );
}

export default Intro;
