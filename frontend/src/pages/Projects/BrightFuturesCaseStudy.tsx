import dashboard from "../../assets/brightfuture-dashboard.png";
import booking from "../../assets/brightfuture-booking.png";
import tutors from "../../assets/brightfuture-tutors.png";
import landing from "../../assets/brightfuture-landing.png";

export default function BrightFuturesCaseStudy() {
  return (
    <div className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto font-body">
      {/* 🧠 Hero */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary">
          📚 Bright Futures – Tutor Booking Platform
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          A full-stack tutor booking web app built for a real-world client.
        </p>
      </section>

      {/* 🖼 Overview Images Grid */}
      <section className="mb-20 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <img src={landing} alt="Landing page" className="rounded-lg shadow" />
          <img src={dashboard} alt="Dashboard" className="rounded-lg shadow" />
          <img
            src={tutors}
            alt="Tutors listing"
            className="rounded-lg shadow"
          />
          <img src={booking} alt="Booking form" className="rounded-lg shadow" />
        </div>
      </section>

      {/* 📄 Project Story */}
      <section className="max-w-3xl mx-auto space-y-6">
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

      {/* 🔍 Features */}
      <section className="mt-20 space-y-20">
        <CaseStudyBlock
          title="🔒 Secure Authentication"
          text="Implemented role-based login for students, tutors, and admins using JWT + bcrypt."
        />
        <CaseStudyBlock
          title="🗓 Booking & Scheduling"
          text="Parents can browse tutors and book sessions with availability controls and form validation."
        />
        <CaseStudyBlock
          title="📊 Admin Dashboard"
          text="Admin view includes user management, booking history, and tutor approval workflows."
        />
        <CaseStudyBlock
          title="🎯 Real Client Workflow"
          text="Delivered this as a real project to a tutoring business owner — including documentation, demo, and post-feedback iterations."
        />
      </section>
    </div>
  );
}

function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-3  mx-auto">
      <h2 className="text-xl font-heading font-semibold text-primary">
        {title}
      </h2>
      <p className="text-base text-zinc-700 font-body leading-relaxed">
        {text}
      </p>
    </div>
  );
}
