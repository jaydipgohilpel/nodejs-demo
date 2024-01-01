const mongoose = require("mongoose");
const InfoSchema = mongoose.Schema({
  name: String,
  city: String,
  // date: Date
  date:
  {
    type: String,
    default: Date.now()
  }


});

module.exports = mongoose.model("temp1", InfoSchema);







