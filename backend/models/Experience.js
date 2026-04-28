const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  role: { type: String, required: true },
  period: String,
  description: String,
  order: { type: Number, default: 0 },
});

module.exports = mongoose.model("Experience", experienceSchema);
