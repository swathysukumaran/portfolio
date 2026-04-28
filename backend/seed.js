require("dotenv").config();
const mongoose = require("mongoose");
const Project = require("./models/Project");
const Experience = require("./models/Experience");

const projects = [
  {
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

const experiences = [
  {
    company: "CodeRythm Technology Pvt Ltd",
    role: "Web Developer",
    period: "March 2022 – August 2023",
    description:
      "Worked as a full-stack developer on several client projects, building responsive web applications using Angular, Node.js, JavaScript, and MongoDB. Focused on clean, maintainable code and smooth user interfaces. Collaborated closely with designers and backend teams to implement features, fix bugs, and improve performance.",
    order: 0,
  },
  {
    company: "CDS (Club Demonstration Services)",
    role: "Product Demonstrator",
    period: "2023",
    description:
      "Interacted directly with customers in a retail setting, explaining product benefits and offering live demos to encourage engagement. Developed strong communication skills by adapting to different customer needs.",
    order: 1,
  },
  {
    company: "Peoples Jewellers",
    role: "Sales Associate",
    period: "2023",
    description:
      "Helped customers find the right jewelry for their needs. Provided honest recommendations, handled billing and returns, and contributed to daily sales goals.",
    order: 2,
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");

  await Project.deleteMany({});
  await Experience.deleteMany({});

  await Project.insertMany(projects);
  await Experience.insertMany(experiences);

  console.log(`Seeded ${projects.length} projects and ${experiences.length} experiences`);
  await mongoose.disconnect();
  process.exit(0);
}

seed().catch((err) => {
  console.error("Seed failed:", err);
  process.exit(1);
});
