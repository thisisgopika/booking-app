const mongoose = require("mongoose");

const RoomSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  price: { type: Number, required: true },
  capacity: { type: Number, required: true },
  available: { type: Boolean, default: true }
});

module.exports = mongoose.model("Room", RoomSchema);
