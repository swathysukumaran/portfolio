import dashboard from "../../assets/brightfuture-dashboard.png";
import booking from "../../assets/brightfuture-booking.png";
import tutors from "../../assets/brightfuture-tutors.png";
import landing from "../../assets/brightfuture-landing.png";

export default function BrightFuturesCaseStudy() {
  return (
    <div className="bg-bg text-text px-6 md:px-24 py-28 max-w-5xl mx-auto font-body">
      {/* Hero */}
      <section className="mb-20 max-w-3xl">
        <p className="text-xs text-accent uppercase tracking-widest mb-4">Case Study</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
          Bright Futures — Tutor Booking Platform
        </h1>
        <p className="mt-5 text-muted text-lg leading-relaxed">
          A full-stack tutor booking web app built for a real-world client.
        </p>
      </section>

      {/* Screenshots grid */}
      <section className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <img src={landing} alt="Landing page" className="rounded-xl border border-border" />
          <img src={dashboard} alt="Dashboard" className="rounded-xl border border-border" />
          <img src={tutors} alt="Tutors listing" className="rounded-xl border border-border" />
          <img src={booking} alt="Booking form" className="rounded-xl border border-border" />
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl space-y-5 text-muted leading-relaxed">
        <p>
          Bright Futures Tutoring was developed as part of a client-driven
          capstone project. The goal was to create a clean, modern booking
          system for a tutoring business, with admin controls and easy
          scheduling.
        </p>
        <p>
          I worked on building the entire MERN stack application — from frontend
          views to backend APIs, user auth, protected routes, and database
          schema design.
        </p>
        <p>
          This project challenged me to implement clear user flows for parents
          and students while also managing tutor data and admin dashboard logic.
        </p>
      </section>

      {/* Features */}
      <section className="mt-20 space-y-10 max-w-3xl">
        {[
          {
            title: "Secure Authentication",
            text: "Implemented role-based login for students, tutors, and admins using JWT + bcrypt.",
          },
          {
            title: "Booking & Scheduling",
            text: "Parents can browse tutors and book sessions with availability controls and form validation.",
          },
          {
            title: "Admin Dashboard",
            text: "Admin view includes user management, booking history, and tutor approval workflows.",
          },
          {
            title: "Real Client Workflow",
            text: "Delivered this as a real project to a tutoring business owner — including documentation, demo, and post-feedback iterations.",
          },
        ].map(({ title, text }) => (
          <div key={title} className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-accent">{title}</h2>
            <p className="text-muted leading-relaxed">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
