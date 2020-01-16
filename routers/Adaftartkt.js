const daftartiket = require('express').Router()
const controller = require('../controller/Adaftartktctrl')

daftartiket.post('/insert', (req, res) => {
  controller.inserttkt(req.body)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

daftartiket.put('/update/:id', (req, res) => {
  controller.updatetkt(req.body, req.params.id)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

daftartiket.get('/tampilkan', (req, res) => {
  controller.gettkt()
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

daftartiket.get('/tampilkan/:kotaasal/:kotatujuan/:tanggalberangkat/:kelaspenumpang', (req, res) => {
  controller.getbyid(req.params.kotaasal, req.params.kotatujuan, req.params.tanggalberangkat, req.params.kelaspenumpang)
    .then(result => res.json(result))
    .catch(error => res.json(error))
})

daftartiket.delete('/delete/:id', (req, res) => {
  controller.deletetkt(req.params.id)
  .then(result => res.json(result))
  .catch(error => res.json(error))
})

module.exports = daftartiket