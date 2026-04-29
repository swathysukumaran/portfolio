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

  // Save to DB (non-blocking — don't fail the request if this errors)
  try {
    await Message.create({ name, email, message });
  } catch (err) {
    console.error("DB save error:", err.message);
  }

  // Send email — this must succeed for the user to see "sent"
  try {
    await sgMail.send({
      to: "swathysukumaran@gmail.com",
      from: "ssukumaranvadakkath@northislandcollege.ca",
      replyTo: email,
      subject: `Portfolio message from ${name}`,
      text: `You have a new message from your portfolio.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });
    res.status(200).json({ success: true });
  } catch (err) {
    const detail = err.response?.body?.errors?.[0]?.message || err.message;
    console.error("SendGrid error:", detail);
    res.status(500).json({ error: "Failed to send email", detail });
  }
});

module.exports = router;
