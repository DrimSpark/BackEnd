const amodel = require('../model/Adaftartkt')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId

exports.inserttkt = (data) =>
new Promise((resolve, reject) => {
  amodel.find({
    kodebooking:data.kodebooking
  })
  .then(res => {
    if (data.length > 0) {
      reject ({ error: true, pesan: 'Kode Booking sudah digunakan' })
    } else {
      amodel.create(data)
      .then(res => {
        resolve({error: false, pesan: 'Data Berhasil Tersimpan'})
      })
      .catch(res => {
        reject({error: true, pesan: 'Gagal Menyimpan Data'})
      })
    }
    // resolve ({error: false, pesan: 'Tiket Berhasil Terdaftar'})
  })
  .catch(err => {
    reject({
      error: true,
      pesan: 'Tiket gagal Terdaftar'
    })
  })
})

exports.updatetkt = (data, id) =>
new Promise((resolve, reject) => {
  amodel.updateOne({
    _id: id
  },data)
  .then(res => {
    resolve ({
      error: false,
      pesan: 'Tiket Berhasil Terupdate'
    })
  })
  .catch(err => {
    reject({
      error: true,
      pesan: 'Tiket gagal Terupdate'
    })
  })
})

exports.gettkt = () =>
new Promise((resolve, reject) => {
  amodel.find()
  .then(res => {
    resolve({
      error: false,
      pesan: 'Data Berhasil di Tampilkan', data:res
    })
  })
  .catch(error => {
    reject({
      error: true,
      pesan: 'Data Gagal di Tampilkan'
    })
  })
})

exports.getbyid = (kotaasal, kotatujuan, tanggalberangkat, kelaspenumpang) =>
new Promise((resolve, reject) => {
  amodel.find({
    kotaasal: kotaasal, kotatujuan: kotatujuan, tanggalberangkat: tanggalberangkat, kelaspenumpang: kelaspenumpang
  })
  .then(res => {
    resolve ({error:false, pesan: 'Data Berhasil diambil', data: res})
  })
  .catch(res => {
    console.log(error)
    reject ({error:true, pesan: 'Data Tidak diambil'})
  })
})


exports.deletetkt = (id) =>
new Promise((resolve, reject) => {
  amodel.deleteOne({
    _id: Object(id)
  }).then(res =>{
    resolve ({
      error:false, 
      pesan: 'data berhasil dihapus'
    })
  })
  .catch (error => {
    console.log(error)
    reject({
      error:true, 
      pesan: 'data tidak terhapus'
    })
  })
})