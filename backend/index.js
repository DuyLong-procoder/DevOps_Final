const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend API is running");
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    service: "backend-api",
  });
});

app.get("/api/message", (req, res) => {
  res.json({
    message: "Hello from Node.js API",
    databaseTime: new Date(),
  });
});

app.get("/api/info", (req, res) => {
  res.json({
    app: "DevOps Demo",
    version: "1.0.0",
    environment: process.env.NODE_ENV || "development",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});