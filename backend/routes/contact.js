const express = require("express");
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const Message = require("../models/Message");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  let dbSaved = false;

  try {
    await Message.create({ name, email, message });
    dbSaved = true;
  } catch (err) {
    console.error("DB save error:", err.message);
  }

  try {
    await sgMail.send({
      to: "swathysukumaran@gmail.com",
      from: "swathysukumaran@gmail.com",
      subject: `Portfolio message from ${name}`,
      text: `From: ${name}\nEmail: ${email}\n\n${message}`,
    });
    res.status(200).json({ success: true, saved: dbSaved });
  } catch (err) {
    console.error("SendGrid error:", err.response?.body || err.message);
    if (dbSaved) {
      res.status(200).json({ success: true, saved: true });
    } else {
      res.status(500).json({ error: "Failed to send message" });
    }
  }
});

module.exports = router;
