const mongoose = require('mongoose')

const PostsSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  _id: String,
  department: String,
  salary: Number,
})

module.exports = mongoose.model('posts', PostsSchema)