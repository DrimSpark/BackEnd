const mongoose = require('mongoose')
const schema = mongoose.Schema

const loginadmin = new schema({
  username: {
    type: String,
    index: {
      unique: true
    }
  },
  password: {
    type: String
  }
})

module.exports = mongoose.model('admin', loginadmin)