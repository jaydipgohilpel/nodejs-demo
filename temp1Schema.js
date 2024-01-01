const mongoose = require('mongoose')

const Temp1Schema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  _id: String,
  department: String,
  salary: Number,
})

module.exports = mongoose.model('Temp1', Temp1Schema)