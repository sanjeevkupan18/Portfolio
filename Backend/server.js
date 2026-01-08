const express = require("express");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = 5001;

const distPath = path.join(__dirname, "../sanjucoding/dist");

// Serve public files like PDFs
const publicPath = path.join(__dirname, "../sanjucoding/public");

app.use(express.static(publicPath));

app.use(express.json());

// Serve static files
app.use(express.static(distPath));

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// API route to send email from contact form
app.post("/api/send", (req, res) => {
  const { first, last, email, text } = req.body;

  const mailOptions = {
    from: email, // sender
    to: process.env.EMAIL_USER, // your email
    subject: `Contact Form Submission from ${first} ${last}`,
    text: `Name: ${first} ${last}\nEmail: ${email}\nMessage: ${text}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Failed to send email" });
    }
    res.status(200).json({ message: "Email sent successfully!" });
  });
});

// Test API
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend working 🚀" });
});

// SPA fallback
app.get("*", (req, res) => {
  res.sendFile(path.join(distPath, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
