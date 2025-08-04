const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const roomRoutes = require("./routes/rooms"); // ✅ Your room routes

dotenv.config(); // Load .env variables

const app = express();
app.use(express.json()); //without this req.body wont work
app.use(cors());

// 🔍 Debug log
console.log("🔁 Server starting...");
console.log("🌍 MONGO_URL:", process.env.MONGO_URL);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.error("❌ Mongo Error:", err));

// Mount auth routes
app.use("/api/auth", require("./routes/auth"));
console.log("🔧 Mounting /api/rooms route...");
const roomsRouter = require("./routes/rooms");
console.log("🔧 Rooms router loaded, mounting at /api/rooms");
app.use("/api/rooms", roomsRouter);
console.log("🔧 Routes mounted successfully");


// Test route
app.get("/", (req, res) => {
  res.send("API is working ✅");
});

// Add a test route for debugging
app.get("/test", (req, res) => {
  console.log("🔥 MAIN SERVER TEST ROUTE HIT");
  res.json({ message: "Main server test route working" });
});

// Start server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
