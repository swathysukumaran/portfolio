export default function HRMCCaseStudy() {
  return (
    <div className="bg-bg text-text px-6 md:px-24 py-24 max-w-7xl mx-auto font-body">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto mb-16">
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-primary">
          🏛️ HRMC Club Portal
        </h1>
        <p className="mt-6 text-lg leading-relaxed">
          A full-featured club management dashboard built with the MERN stack.
        </p>
      </section>

      {/* Project Overview */}
      <section className="max-w-3xl mx-auto space-y-6">
        <p>
          HRMC is a local community in my hometown that needed a digital system
          to manage its growing member base, track subscriptions, oversee club
          roles, and coordinate events. I’m currently developing a custom web
          portal to help the club manage all its internal operations
          efficiently.
        </p>
        <p>
          This project gave me a chance to design and build a real-world admin
          dashboard application from scratch using the MERN stack, with a focus
          on structured data, custom roles, and financial tracking.
        </p>
      </section>

      {/* Project Goals */}
      <section className="mt-16 max-w-3xl mx-auto">
        <h2 className="text-xl font-semibold text-primary font-heading mb-4">
          🎯 Project Goals
        </h2>
        <ul className="list-disc list-inside space-y-2 text-zinc-700">
          <li>Digitally manage all member information</li>
          <li>
            Track membership roles with restrictions on leadership positions
          </li>
          <li>Handle yearly subscription payments and dues</li>
          <li>Manage club events, collaborations, and budgets</li>
          <li>Track overall expenses and financial summaries</li>
        </ul>
      </section>

      {/* Features */}
      <section className="mt-20 space-y-20">
        <CaseStudyBlock
          title="👥 Member Management"
          text="Custom forms and views for recording detailed member data — including contact info, roles, DOB, interests, and profile photos."
        />
        <CaseStudyBlock
          title="💳 Subscription Tracking"
          text="Each member's payment history is tracked annually, with filters to view defaulters or fully paid members."
        />
        <CaseStudyBlock
          title="🗓 Event Coordination"
          text="Admins can create events, track participation, add expenses, and record partner organization info."
        />
        <CaseStudyBlock
          title="📊 Role + Access Control"
          text="Custom admin roles limit access to sensitive areas, while allowing team-wide collaboration."
        />
        <CaseStudyBlock
          title="📁 Built for Scalability"
          text="Code structured as reusable components with MongoDB collections designed to support growth and modular expansion."
        />
      </section>
    </div>
  );
}

// 🔄 Reusable feature block
function CaseStudyBlock({ title, text }: { title: string; text: string }) {
  return (
    <div className="space-y-3 max-w-3xl mx-auto">
      <h2 className="text-xl font-semibold font-heading text-primary">
        {title}
      </h2>
      <p className="text-base text-zinc-700 font-body leading-relaxed">
        {text}
      </p>
    </div>
  );
}
