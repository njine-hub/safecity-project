const mongoose = require("mongoose");
const user = require("./user/models");

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model("User", userSchema);
