const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
    const { name, email, message } = req.body;

    const msg = {
        to: "swathysukumaran@gmail.com",
        from: "swathysukumaran@gmail.com",
        subject: `Message from ${name}`,
        text: `Email: ${email}\n\nMessage:\n${message}`,
    };

    console.log("Sending email:", msg);

    try {
        await sgMail.send(msg);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error("SendGrid error:", error.response?.body || error.message);
        res.status(500).json({ success: false, error: "Failed to send email" });
    }
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
