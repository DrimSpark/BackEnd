const admin = require('../model/admin')
const mongoose = require('mongoose')
const objectId = mongoose.Types.ObjectId
const bcrypt = require('bcryptjs')


exports.inpputadmin = (data) =>
new Promise((resolve, reject) => {
  bcrypt.hash(data.password, 10, (err, hash) => {
    data.password = hash
    // console.log(data.password)
    admin.create(data)
    .then(res => {
      resolve ({
        error: false,
        pesan: 'Data Tersimpan'
      })
    })
    .catch(err => {
      reject({
        error: true,
        pesan: 'Gagal Tersimpan'
      })
    })
  })
})


exports.updateadmin = (data, id) =>
new Promise((resolve, reject) => {
  admin.updateOne({
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

exports.login = (data) =>
new Promise((resolve, reject) => {
  admin.findOne({
    username: data.username
  }).then(res => {
    if (res === null){
      reject({
        error: true,
        pesan: 'Username Salah'
      })
    }else {
      let hashpassword = res.password
      if(bcrypt.compareSync(data.password, hashpassword)) {
        resolve({
          error: false,
          pesan: 'berhasil login',
          data: res
        })
      } else {
        reject({
          error: true,
          pesan: 'passwword salah'
        })
      }
    }
  })
})