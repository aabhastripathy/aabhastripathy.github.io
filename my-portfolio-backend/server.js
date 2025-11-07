const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect(err => {
  if (err) {
    console.error("❌ MySQL connection failed:", err.message);
  } else {
    console.log("✅ Connected to MySQL Database");
  }
});

// API Endpoint
app.post("/save-contact", (req, res) => {
  const { name, purpose, contact } = req.body;

  if (!name || !purpose || !contact) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql = "INSERT INTO contact_messages (name, purpose, contact) VALUES (?, ?, ?)";
  db.query(sql, [name, purpose, contact], (err, result) => {
    if (err) {
      console.error("❌ Database Error:", err);
      return res.status(500).json({ error: "Failed to save" });
    }
    res.status(200).json({ message: "✅ Contact saved", id: result.insertId });
  });
});

// Start server
app.listen(process.env.PORT, () => {
  console.log(`✅ Server running on port ${process.env.PORT}`);
});
