const mongoose = require("mongoose");

const IronhackerSchema = new mongoose.Schema({
  name: String,
  email: String,
  favoriteLanguage: String,
});

const IronHackerModel = mongoose.model("ironhackers", IronhackerSchema);

module.exports = IronHackerModel;
