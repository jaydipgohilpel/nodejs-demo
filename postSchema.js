const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  _id: String,
  department: String,
  salary: Number,
  is_active: Boolean,
  id: String
})

module.exports = mongoose.model('travelers', PostsSchema)