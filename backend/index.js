const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();
const PORT = process.env.PORT || 3000;

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const allowedOrigins = [
    "https://portfolio-y2bu.onrender.com",
    "http://localhost:3000",
];

app.use(
    cors({
        origin: function (origin, callback) {
            if (!origin || allowedOrigins.includes(origin)) {
                callback(null, true);
            } else {
                callback(new Error("Not allowed by CORS"));
            }
        },
        methods: ["GET", "POST"],
        credentials: true,
    })
);
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
