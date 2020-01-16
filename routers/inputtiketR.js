const itiket = require('express')()
const itiketController = require('../controller/inputtiketC')

itiket.post('/insert', (req,res) => {
  itiketController.insertItiket(req.body)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

itiket.put('/update/:kodebooking', (req, res) => {
  itiketController.updateItiket(req.body, req.params.kodebooking)
.then(result => {
  res.json(result)
}).catch(err => {
  res.json(err)
  })
})

itiket.delete('/delete/:kodebooking', (req, res) => {
  itiketController.deleteItiket(req.params.kodebooking)
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

itiket.get('/getItiket', (req,res) => {
  itiketController.getItiket()
  .then(result => {
    res.json(result)
  }).catch(err => {
    res.json(err)
  })
})

itiket.post('/simpanitiketandroid',(req, res) => {
  itiketController.simpanitiketAndroid(req.body.kodebooking,req.body.kotaasal,req.body.kotatujuan,req.body.namastasiun,req.body.jadwalkeberangkatan,req.body.jadwaltiba,req.body.kelaspenumpang)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})


itiket.put('/updateitiketandroid/:id', (req, res) => {
  itiketController.updateitiketAndroid(req.params.id,req.body.namalengkap,req.body.username,req.body.alamat,
      req.body.password)
      .then(result => res.json(result))
      .catch(error => res.json(error))
})

itiket.get('/getitiketandroid/:id', (req, res) => {
  console.log(req.params.id)
  itiketController.getItiketkode(req.params.id)
      .then(result => res.json(result))
      .catch(error => res.json(error))
})

module.exports = itiket
