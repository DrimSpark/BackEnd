const mongoose = require('mongoose')
const schema = mongoose.Schema

const AinputSchema = new schema({
  kodebooking: {
    type: String,
    index: {
      unique: true
    }
  },
  kotaasal: {
    type: String
  },
  kotatujuan: {
    type: String
  },
  tanggalberangkat: {
    type: String
  },
  namastasiun: {
    type: String
  },
  jadwalkeberangkatan: {
    type: String
  },
  jadwaltiba: {
    type: String
  },
  kelaspenumpang: {
    type: String
  },
  keretaapi: {
    type: String
  },
  hargatiket: {
    type: Number
  }
})

module.exports = mongoose.model('tiketkereta', AinputSchema)