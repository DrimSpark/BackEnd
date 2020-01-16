const itiket = require('../models/inputtiket')
const mongoose = require('mongoose')
const ObjectId = mongoose.Types.ObjectId

exports.insertItiket = (data) =>
new Promise ((resolve, reject) => {
  itiket.create(data)
  .then(res => {
    resolve({
      error: false,
      pesan: 'Berhasil Input Tiket'
    })
  })
  .catch(() => {
    reject({
      error: true,
      pesan: 'Gagal Input Tiket'
    })
  })
})

exports.updateItiket = (data, kodebooking) =>
new Promise ((resolve, reject) => {
  itiket.updateOne({
    kodebooking: kodebooking
  },data)
  .then(res => {
    resolve({
      error: false,
      pesan: 'Berhasil Update Tiket',
    })
  })
  .catch(() => {
    reject({
      error: true,
      pesan: 'Gagal Update Tiket'
    })
  })
})

exports.deleteItiket = (kodebooking) =>
new Promise ((resolve, reject) => {
  itiket.deleteOne({
    kodebooking: kodebooking
  }).then(res=> {
    resolve({
      error: false,
      pesan: 'Berhasil Delete Tiket'
    })
  })
  .catch(() => {
    reject({
      error: true,
      pesan: 'Gagal Delete Tiket'
    })
  })
})

exports.getItiket = () =>
new Promise((resolve, reject) => {
  itiket.find()
  .then(res => {
    resolve({
      error: false,
      pesan: 'Berhasil Mengambil Data',
      data: res
    })
  })
  .catch(() => {
    reject({
      error: true,
      pesan: 'Gagal Mengambil Data'
    })
  })
})

exports.simpanitiketAndroid = (booking,asal,tujuan,stasiun,keberangkatan,tiba,penumpang) =>
new Promise((resolve, reject) => {
  let datatiket = new itiket({
    kodebooking = booking,
    kotaasal = asal,
    kotatujuan = tujuan,
    namastasiun = stasiun,
    jadwalkeberangkatan = keberangkatan,
    jadwaltiba = tiba,
    kelaspenumpang = penumpang
  })
});

itiket.create(datatiket)
.then(res => {
  resolve ({error : false,
  pesan : 'Data Terinput'})
})
.catch(res => {
  reject({
    error: true,
    pesan: 'Gagal Terinput'
  })
})

exports.updateitiketAndroid = (id,nama_lengkap,username_,alamat_,password_) =>
new Promise(async (resolve, reject) => {
  await itiket.update(
    {_id: ObjectId(id) },
    {
      $set: {
        namalengkap: nama_lengkap,
        username: username_,
        alamat: alamat_,
        password: password_
      }
    }
  )
})
.then(res => {
  resolve ({error: false,
  pesan: 'Berhasil Update'})
})
.catch(res => {
  console.log("disini")
  reject({
    error: true,
    pesan: 'Gagal Update'
  })
})

exports.getItiketkode = (kode) =>
new Promise((resolve,reject) => {
  itiket.findOne({kodebooking: kode})
  .then(res => {
    resolve ({error:false, pesan: 'Berhasil', data: res})
  })
  .catch(res => {
    console.log(error)
    reject ({error: true, pesan : 'Gagal'})
  })
})


