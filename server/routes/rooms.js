const express = require("express"); // we import express, a node framework
const router = express.Router(); // using express router to build a mini app
const Room = require("../models/Room"); // import mongoose model so reading/writing can happen easily

console.log("📁 Loading rooms.js route module");

// Simple test route - MUST come before the main route
router.get("/simple", (req, res) => {
  console.log("🔥 SIMPLE TEST ROUTE HIT");
  res.json({ message: "Simple test route working" });
});

// Test route - MUST come before the main route
router.get("/test", (req, res) => {
  console.log("🔥 TEST ROUTE HIT");
  res.json({ message: "Test route working" });
});

// CREATE Room
router.post("/", async (req, res) => {
  try {
    const newRoom = new Room(req.body); // req.body contains room data from frontend
    const savedRoom = await newRoom.save(); // saves the room to MongoDB
    res.status(201).json(savedRoom); // if saved, return 201 response
  } catch (err) {
    console.error("Error in POST /rooms:", err);
    res.status(500).json({ error: err.message }); // error handler
  }
});

// GET All Rooms - This should come LAST
router.get("/", async (req, res) => {
  console.log("🔥 ROUTE HIT - GET /rooms");
  try {
    console.log("GET /rooms endpoint hit");
    const { search, minPrice, maxPrice } = req.query;
    console.log('Received query:', req.query);

    const andConditions = [];

    if (search) {
      andConditions.push({
        $or: [
          { name: { $regex: search, $options: "i" } },
          { type: { $regex: search, $options: "i" } }
        ]
      });
      console.log('Search filter:', search);
    }

    if (minPrice || maxPrice) {
      const priceFilter = {};
      if (minPrice) priceFilter.$gte = Number(minPrice);
      if (maxPrice) priceFilter.$lte = Number(maxPrice);
      andConditions.push({ price: priceFilter });
    }

    const query = andConditions.length > 0 ? { $and: andConditions } : {};
    console.log('Final query object:', query);

    const rooms = await Room.find(query);
    console.log('Rooms found:', rooms.length);
    res.json(rooms);
  } catch (err) {
    console.error("Error in GET /rooms:", err);
    res.status(500).json({ error: err.message });
  }
});

// DELETE Room
router.delete("/:id", async (req, res) => {
  try {
    await Room.findByIdAndDelete(req.params.id); // delete by room ID
    res.json({ msg: "Room deleted" }); // response is a message
  } catch (err) {
    console.error(`Error in DELETE /rooms/${req.params.id}:`, err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; // export so we can connect it in index.js
