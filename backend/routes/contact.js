const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "hotmail",
  auth: {
    user: process.env.OUTLOOK_USER,
    pass: process.env.OUTLOOK_PASS,
  },
});

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const mailOptions = {
      from: process.env.OUTLOOK_USER,
      to: email,
      subject: "Dog Walking/Training Inquiry",
      text: `Name: ${name}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send message." });
  }
});

module.exports = router;
