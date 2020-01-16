const registeruser = require('express')()
const userregisterController = require('../controller/userregistercontroller')

registeruser.post('/simpan', (req,res) => {
  userregisterController.insertRegister(req.body)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

registeruser.post('/register', (req,res) => {
  userregisterController.register(req.body)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})


module.exports = registeruser