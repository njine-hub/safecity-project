const mongoose = require("mongoose");

const incidentSchema = new mongoose.Schema({
  title: String,
  description: String,
  category: String,
  location: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
}, { timestamps: true });

module.exports = mongoose.model("Incident", incidentSchema);
