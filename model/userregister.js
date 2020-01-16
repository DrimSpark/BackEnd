const mongoose = require('mongoose')
const Schema = mongoose.Schema

const uRegister = new Schema ({
  namalengkap:{
    type: String
  },
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  alamat: {
    type: String
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('userregister', uRegister)
