const mongoose = require("mongoose");
const InfoSchema = mongoose.Schema({
  name: String,
  city: String,
});

module.exports = mongoose.model("temp1", InfoSchema);0.







