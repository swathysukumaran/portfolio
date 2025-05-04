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
          Bright Futures Tutoring was a group capstone project completed as part
          of our Project Management course. The objective was to design and
          build a professional, accessible tutoring platform that allows
          students and parents to book sessions with tutors, while supporting
          both in-person and online formats.
        </p>
        <p className="mt-4 max-w-3xl">
          While the project was managed as a team, I was fully responsible for
          the development phase and built the entire application using the MERN
          stack (MongoDB, Express, React, Node.js).
        </p>
      </section>
      {/* Objectives */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🎯 Project Objectives (from Client Brief)
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Display detailed tutor bios with subject expertise and credentials
          </li>
          <li>
            Let students and parents book tutoring sessions using a calendar
          </li>
          <li>Support single and bundled session payments</li>
          <li>Deliver a clean, mobile-responsive design</li>
          <li>Meet WCAG 2.1 AA accessibility standards</li>
          <li>Be optimized for performance and SEO visibility</li>
          <li>
            Include important static pages like Home, About, Services, Contact,
            and Testimonials
          </li>
        </ul>
      </section>
      {/* What I Built */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🔧 What I Built
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>A responsive React frontend with intuitive navigation</li>
          <li>A calendar-based appointment booking system</li>
          <li>A tutor listing page with profile cards and subject tags</li>
          <li>
            Backend endpoints to handle booking data using Express and MongoDB
          </li>
          <li>
            Structured layout components following a mobile-first approach
          </li>
          <li>
            Static pages (About, Services, Contact) styled to match the brand
            tone
          </li>
        </ul>
        <p className="mt-4">
          The main functionality — viewing tutors and booking time slots — was
          successfully implemented. Development was done within a tight academic
          timeline, and while all core features are functional, the project has
          room for future refinement in UI polish, theme consistency, and
          feedback mechanisms to create a smoother user flow.
        </p>
      </section>
      {/* My Role */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🙋‍♀️ My Role and Responsibilities
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Took ownership of all coding and integration tasks</li>
          <li>
            Translated a detailed client brief into a working full-stack
            solution
          </li>
          <li>Implemented both frontend and backend functionality</li>
          <li>Ensured responsive design across mobile and desktop screens</li>
          <li>
            Collaborated with team members on planning, testing, and final
            delivery
          </li>
        </ul>
      </section>
      {/* What I Would Improve */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🚧 What I Would Improve
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Enhance the visual consistency and overall design flow</li>
          <li>Add real-time feedback and success messages for bookings</li>
          <li>Integrate a secure payment system (e.g., Stripe or PayPal)</li>
          <li>Improve the form handling and validation logic</li>
          <li>
            Refactor some components for better performance and maintainability
          </li>
        </ul>
      </section>
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
            alt="Booking Calendar"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>
    </div>
  );
}
