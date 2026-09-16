import type { Experience } from "../lib/api";

export const fallbackExperiences: Experience[] = [
  {
    _id: "coderythm",
    company: "CodeRythm Technology Pvt Ltd",
    role: "Web Developer",
    period: "March 2022 – August 2023",
    bullets: [
      "Built and maintained front-end features and reusable UI components using React across live client projects",
      "Integrated REST APIs and contributed backend support using Node.js and Sails.js",
      "Worked with MongoDB for data retrieval and management as part of application development",
      "Contributed to daily debugging, code reviews, and agile sprint planning within a close-knit development team",
      "Worked across the full stack on multiple concurrent client projects, moving fluidly between front-end and back-end priorities as one of the team's earlier developers",
    ],
  },
  {
    _id: "freelance",
    company: "Self-directed",
    role: "Freelance Web Developer — Independent Projects",
    period: "Canada | 2024 – Present",
    bullets: [
      "Diagnosed and resolved a critical WordPress admin issue causing a blank widget screen by identifying and dequeuing conflicting scripts",
      "Investigated recurring 502 server errors and restored site stability by aligning PHP runtime compatibility",
      "Corrected misconfigured canonical URLs to strengthen SEO integrity and prevent duplicate indexing",
      "Implemented a team-directory feature on an existing Wix site for a separate independent client",
    ],
  },
  {
    _id: "contract",
    company: "WordPress/Elementor, via project collaborator",
    role: "Contract Web Developer — Client Projects",
    period: "Canada | 2024 – Present",
    bullets: [
      "Executed scoped front-end and functionality work across roughly 10 client WordPress projects using Elementor, PHP, CSS, and JavaScript, in collaboration with a project lead who manages client relationships",
      "Built custom post types, filters, and reusable components tailored to each client's site requirements",
      "Implemented dynamic CMS structures using Elementor and ACF, enabling non-technical clients to manage content efficiently",
    ],
  },
];
