const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json()); // Parse JSON bodies
app.use(express.json()); // Built-in body parser for JSON

// Routes
app.use("/contact", contactRoutes);

// Simple route
app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
