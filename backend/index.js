require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 3003;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(express.json());

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  message: {
    type: String,
    required: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Contact = mongoose.model("Contact", contactSchema);

app.get("/", (req, res) => {
  res.send("Portfolio backend is running!");
});

app.get("/api/test", (req, res) => {
  res.json({
    message: "API is working!",
    database: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected",
  });
});

app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        message: "Please provide your name, email, and message.",
      });
    }

    const newContact = new Contact({
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
    });

    await newContact.save();

    res.status(201).json({
      message: "Your message was saved successfully!",
    });
  } catch (error) {
    console.error("Contact error:", error.message);

    res.status(500).json({
      message: "Unable to save your message.",
    });
  }
});

async function startServer() {
  try {
    if (!uri) {
      throw new Error("MONGO_URL is missing from your .env file.");
    }

    await mongoose.connect(uri);

    console.log("MongoDB connected successfully!");

    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Startup error:", error.message);
    process.exit(1);
  }
}

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;

  if (!process.env.ADMIN_PASSWORD || !process.env.JWT_SECRET) {
    return res.status(500).json({ message: "Admin login is not configured." });
  }

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Incorrect password." });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.JWT_SECRET,
    { expiresIn: "2h" }
  );

  res.json({ token });
});

function verifyAdmin(req, res, next) {
  const authHeader = req.headers.authorization;
  const token = authHeader?.startsWith("Bearer ")
    ? authHeader.slice(7)
    : null;

  if (!token) {
    return res.status(401).json({ message: "Please log in first." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({ message: "Access denied." });
    }

    next();
  } catch (error) {
    return res.status(401).json({ message: "Session expired. Please log in again." });
  }
}

app.get("/api/admin/contacts", verifyAdmin, async (req, res) => {
  try {
    const contacts = await Contact.find()
      .select("name email message createdAt")
      .sort({ createdAt: -1 })
      .lean();

    res.json(contacts);
  } catch (error) {
    console.error("Fetch contacts error:", error.message);
    res.status(500).json({ message: "Unable to fetch messages." });
  }
});

startServer();