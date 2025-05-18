import React from "react";

export default function BrightFuturesCaseStudy() {
  return (
    <div className="bg-primary text-white min-h-screen py-12 px-6 md:px-16">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-tertiary">
          📚 Bright Futures Tutoring – Tutor Booking Web App
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          Bright Futures Tutoring was developed as part of a group project for
          our Project Management course at North Island College. The objective
          was to create a functional tutoring platform that allows students to
          browse tutors and book appointments.
        </p>
        <p className="mt-4 max-w-3xl">
          While the project was collaboratively planned, I took complete
          ownership of the development process. I built the entire application
          using the MERN stack (MongoDB, Express, React, Node.js) under strict
          academic time constraints.
        </p>
      </section>

      {/* Project Timeline and Goals */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🗕 Development Timeline & Focus
        </h2>
        <p className="mb-4">
          The academic timeline gave me only a few weeks to translate the client
          brief into a working web app. I focused on core features: user
          authentication, tutor listings, and a calendar-based booking system.
        </p>
        <p>
          Post-course, I continued refining the app independently to prepare it
          for my portfolio, improving code structure, visual design, and
          deployment stability.
        </p>
      </section>

      {/* What I Built */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          💪 What I Built
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Frontend built in React using Tailwind and shadcn/ui</li>
          <li>Student login, registration, and protected routes</li>
          <li>Tutor listing page with bios, subjects, and availability</li>
          <li>Calendar-based appointment booking with backend validation</li>
          <li>
            Express + MongoDB backend with custom cookie-based authentication
          </li>
          <li>Responsive design with clean layout and navigation</li>
          <li>Frontend and backend deployed separately using Render</li>
        </ul>
      </section>

      {/* Challenges and Learning */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🔍 Key Learning and Challenges
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Learned how to handle cross-origin authentication using cookies
          </li>
          <li>Configured CORS and secure cookie handling for deployment</li>
          <li>
            Converted backend from ts-node to a production-ready tsc build
          </li>
          <li>
            Handled environment variable configuration and deployment structure
          </li>
          <li>Refactored components for clarity and responsiveness</li>
        </ul>
      </section>

      {/* Personal Reflection */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          ✨ Personal Reflection
        </h2>
        <p>
          This project helped me grow beyond just implementing features. I had
          to think about user flow, deployment details, and interface polish. It
          taught me the importance of revisiting my own code, improving what’s
          already working, and making something truly usable.
        </p>
        <p className="mt-2">
          Bright Futures started as a college project — now it's a real, working
          app I feel confident including in my portfolio.
        </p>
      </section>

      {/* Screenshots */}
      <section className="mb-10 max-w-6xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-4">
          📸 Screenshots
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <img
            src="/images/brightfutures-1.png"
            alt="Home Page"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/brightfutures-2.png"
            alt="Tutor Listing"
            className="rounded-xl shadow-lg"
          />
          <img
            src="/images/brightfutures-3.png"
            alt="Booking Form"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
