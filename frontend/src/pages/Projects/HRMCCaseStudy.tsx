export default function HRMCCaseStudy() {
  const features = [
    {
      title: "Member Management",
      text: "Custom forms and views for recording detailed member data — including contact info, roles, DOB, interests, and profile photos.",
    },
    {
      title: "Subscription Tracking",
      text: "Each member's payment history is tracked annually, with filters to view defaulters or fully paid members.",
    },
    {
      title: "Event Coordination",
      text: "Admins can create events, track participation, add expenses, and record partner organization info.",
    },
    {
      title: "Role + Access Control",
      text: "Custom admin roles limit access to sensitive areas, while allowing team-wide collaboration.",
    },
    {
      title: "Built for Scalability",
      text: "Code structured as reusable components with MongoDB collections designed to support growth and modular expansion.",
    },
  ];

  return (
    <div className="bg-bg text-text px-6 md:px-24 py-28 max-w-5xl mx-auto font-body">
      {/* Hero */}
      <section className="mb-20 max-w-3xl">
        <p className="text-xs text-accent uppercase tracking-widest mb-4">Case Study</p>
        <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
          HRMC Club Portal
        </h1>
        <p className="mt-5 text-muted text-lg leading-relaxed">
          A full-featured club management dashboard built with the MERN stack.
        </p>
        <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/5 text-amber-400 text-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          Currently in progress
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-3xl space-y-5 text-muted leading-relaxed">
        <p>
          HRMC is a local community in my hometown that needed a digital system
          to manage its growing member base, track subscriptions, oversee club
          roles, and coordinate events. I'm currently developing a custom web
          portal to help the club manage all its internal operations efficiently.
        </p>
        <p>
          This project gave me a chance to design and build a real-world admin
          dashboard application from scratch using the MERN stack, with a focus
          on structured data, custom roles, and financial tracking.
        </p>
      </section>

      {/* Goals */}
      <section className="mt-16 max-w-3xl">
        <h2 className="text-lg font-heading font-semibold text-accent mb-4">
          Project Goals
        </h2>
        <ul className="space-y-2 text-muted list-disc list-inside">
          <li>Digitally manage all member information</li>
          <li>Track membership roles with restrictions on leadership positions</li>
          <li>Handle yearly subscription payments and dues</li>
          <li>Manage club events, collaborations, and budgets</li>
          <li>Track overall expenses and financial summaries</li>
        </ul>
      </section>

      {/* Features */}
      <section className="mt-20 max-w-3xl space-y-10">
        {features.map(({ title, text }) => (
          <div key={title} className="space-y-2">
            <h2 className="text-lg font-heading font-semibold text-accent">{title}</h2>
            <p className="text-muted leading-relaxed">{text}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
