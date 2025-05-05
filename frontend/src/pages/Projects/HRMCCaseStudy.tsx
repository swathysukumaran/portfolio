import React from "react";

export default function HRMCCaseStudy() {
  return (
    <div className="bg-primary text-white min-h-screen py-12 px-6 md:px-16">
      {/* Hero Section */}
      <section className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-tertiary">
          🏛️ HRMC Club Portal
        </h1>
        <p className="mt-4 text-lg text-secondary max-w-2xl">
          HRMC is a local community in my hometown that needed a digital system
          to manage its growing member base, track subscriptions, oversee club
          roles, and coordinate events. I’m currently developing a custom web
          portal to help the club manage all its internal operations
          efficiently.
        </p>
        <p className="mt-4 max-w-3xl">
          This project gave me a chance to design and build a real-world admin
          dashboard application from scratch using the MERN stack, with a focus
          on structured data, custom roles, and financial tracking.
        </p>
      </section>

      {/* Goals */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🎯 Project Goals
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Digitally manage all member information</li>
          <li>
            Track membership roles, including limits on leadership positions
          </li>
          <li>Handle yearly subscription payments and payment status</li>
          <li>
            Organize and record events and all related activity (members
            involved, funds raised/spent, type of event)
          </li>
          <li>Maintain logs of general club expenses</li>
          <li>Create a centralized dashboard for club admins</li>
        </ul>
      </section>

      {/* Features */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          🛠️ Features Being Built
        </h2>

        <h3 className="font-semibold mt-4">✅ Member Management</h3>
        <p>
          Detailed member profiles with fields like name, DOB, blood group,
          photo, contact info, occupation details, and interests. Each member
          gets an automatically assigned membership number (e.g., H-101, H-102).
        </p>

        <h3 className="font-semibold mt-4">✅ Role Assignment</h3>
        <p>One-click assignment of structured roles:</p>
        <ul className="list-disc list-inside ml-5">
          <li>President, General Secretary, Treasurer (one each)</li>
          <li>Vice Presidents & Joint Secretaries (max two each)</li>
          <li>Executives & Regional Coordinators (with region info)</li>
          <li>Default role: Member</li>
        </ul>

        <h3 className="font-semibold mt-4">✅ Subscription Tracking</h3>
        <p>
          Tracks annual payment status with ability to view who has paid and who
          is pending. This is updated each year.
        </p>

        <h3 className="font-semibold mt-4">✅ Event Management</h3>
        <p>
          Add and update events with type (official, collaborated, charity),
          description, members involved, expenses and income sources, and total
          cost summary.
        </p>

        <h3 className="font-semibold mt-4">✅ Expenses Log</h3>
        <p>
          Track general club expenses with details on type, amount, and date.
        </p>
      </section>

      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          👩‍💻 My Role
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Planning and designing the full data schema and dashboard layout
          </li>
          <li>
            Currently building the backend logic for member creation, role
            restrictions, and event recording
          </li>
          <li>Working on custom forms and tables using React + Tailwind</li>
          <li>
            Progressively integrating CRUD functionality using MongoDB and
            Express
          </li>
          <li>
            Aiming to structure everything as a scalable, real-world club admin
            tool
          </li>
        </ul>
      </section>

      {/* Next Steps */}
      <section className="mb-10 max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          📌 Next Steps
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Add role-based access control (e.g., only admins can edit data)
          </li>
          <li>Implement search and filter tools for members and events</li>
          <li>
            Build summary reports: member counts, role stats, total fees
            collected, and event expenses
          </li>
          <li>Optimize UI for mobile and tablet view</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="max-w-3xl">
        <h2 className="text-2xl font-semibold text-tertiary mb-2">
          💡 Why This Project Matters
        </h2>
        <p>
          This app solves a real administrative problem for a local community
          club — going from spreadsheets and WhatsApp to a proper digital
          system. It’s also helping me sharpen my backend logic, CRUD patterns,
          and admin dashboard design skills with real users in mind.
        </p>
      </section>
    </div>
  );
}
