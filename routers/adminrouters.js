const admin = require('express').Router()
const controller = require('../controller/adminctrl')

admin.post('/insertadmin', (req, res) => {
  controller.inpputadmin(req.body)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

admin.put('/updateadmin/:id', (req, res) => {
  controller.updateadmin(req.body, req.params.id)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

admin.post('/login', (req, res) => {
  controller.login(req.body)
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

module.exports = admin