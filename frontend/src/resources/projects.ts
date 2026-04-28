import type { Project } from "../lib/api";

export const fallbackProjects: Project[] = [
  {
    _id: "tempo",
    name: "Tempo – AI Travel Planner",
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind", "Gemini API", "Google APIs"],
    description:
      "A personalized travel planner powered by AI. Users can enter natural input to generate itineraries, edit them using voice, and share plans with others. Built with Google APIs and Gemini AI integration.",
    imageKey: "tempo",
    repo: "https://github.com/swathysukumaran/tempo",
    caseStudyPath: "/projects/tempo",
    inProgress: false,
    order: 0,
  },
  {
    _id: "brightfuture",
    name: "Bright Futures Tutoring",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    description:
      "A full-stack tutoring platform that lets students book sessions with tutors based on availability. Built as a group capstone project, with features like profile browsing, calendar-based bookings, and role-specific dashboards.",
    imageKey: "brightfuture",
    link: "https://brightfuture-1.onrender.com",
    repo: "https://github.com/swathysukumaran/brightfuture",
    caseStudyPath: "/projects/brightfutures",
    order: 1,
  },
  {
    _id: "hrmc",
    name: "HRMC Club Portal",
    tech: ["React", "Node.js", "MongoDB", "Express", "Tailwind"],
    description:
      "An admin dashboard for a local community club to manage members, roles, annual subscriptions, events, and expenses. Currently in progress.",
    imageKey: "hrmc",
    caseStudyPath: "/projects/hrmc",
    inProgress: true,
    order: 2,
  },
];
