const express = require("express");
const router = express.Router();
const Project = require("../models/Project");

router.get("/", async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1 });
    res.json(projects);
  } catch {
    res.status(500).json({ error: "Failed to fetch projects" });
  }
});

module.exports = router;
