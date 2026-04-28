const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tech: [String],
  description: String,
  imageKey: String,
  link: String,
  repo: String,
  caseStudyPath: String,
  inProgress: { type: Boolean, default: false },
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Project", projectSchema);
