const mongoose = require('mongoose')

const personsSchema = new mongoose.Schema({
  id: String,
  firstName: String,
  lastName: String,
  maidenName: String,
  age: Number,
  gender: String,
  email: String,
  phone: String,
  username: String,
  password: String,
  birthDate: String,
  image: String,
  bloodGroup: String,
  height: Number,
  weight: Number,
  eyeColor: String,
  hair: {
    color: String,
    type: String
  },
  domain: String,
  ip: String,
  address: {
    address: String,
    city: String,
    coordinates: {
      lat: String,
      lng: String
    },
    postalCode: Number,
    state: String
  },
  macAddress: String,
  university: String,
  bank: {
    cardExpire: String,
    cardNumber: String,
    cardType: String,
    currency: String,
    iban: String
  },
  company: {
    address: {
      address: String,
      city: String,
      coordinates: {
        lat: Number,
        lng: Number
      },
      postalCode: Number,
      state: String
    },
    department: String,
    name: String,
    title: String
  },
  ein: String,
  ssn: String,
  userAgent: String,
  scores: String,
  is_active: Boolean,
  is_deleted: Boolean
})

module.exports = mongoose.model('persons', personsSchema)