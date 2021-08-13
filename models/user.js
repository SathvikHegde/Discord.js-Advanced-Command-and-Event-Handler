const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: String,
  userID: String,
  serverID: String,
  coins: {type: Number, default: 1000}
});

module.exports = mongoose.model("User", userSchema);