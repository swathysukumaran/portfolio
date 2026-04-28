const express = require("express");
const router = express.Router();
const Experience = require("../models/Experience");

router.get("/", async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ order: 1 });
    res.json(experiences);
  } catch {
    res.status(500).json({ error: "Failed to fetch experiences" });
  }
});

module.exports = router;
