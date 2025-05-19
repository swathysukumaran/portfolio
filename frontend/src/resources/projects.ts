import tempotrip from "../assets/tempo-trip.jpg";
import brightfuture from "../assets/brightfuture-dashboard.png";
import hrmc from "../assets/hrmc.png";
export const projects = [
  {
    name: "Tempo – AI Travel Planner",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Gemini API", "Google APIs"],
    description:
      "A personalized travel planner powered by AI. Users can enter natural input to generate itineraries, edit them using voice, and share plans with others. Built with Google APIs and Gemini AI integration.",
    image: tempotrip,
    link: "https://tempo-frontend-lov2.onrender.com",
    repo: "https://github.com/swathysukumaran/tempo", 
    caseStudyPath: "/projects/tempo",
  },
  {
    name: "Bright Futures Tutoring",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    description:
      "A full-stack tutoring platform that lets students book sessions with tutors based on availability. Built as a group capstone project, with features like profile browsing, calendar-based bookings, and role-specific dashboards.",
    image:brightfuture,
    link: "https://brightfuture-1.onrender.com", 
    repo: "https://github.com/swathysukumaran/brightfuture",
    caseStudyPath: "/projects/brightfutures",
  },
  {
    name: "HRMC Club Portal",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    description:
      "An admin dashboard for a local community club, built to manage members, roles, annual subscriptions, events, and expenses. This project is currently in progress.",
    image:hrmc,
    inProgress: true,
    link: "", // 🔗 Optional future link
    repo: "", // 🔗 Optional future link
    caseStudyPath: "/projects/hrmc",
  },
];
