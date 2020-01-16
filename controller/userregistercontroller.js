const register = require('../model/userregister')
const bcrypt = require('bcryptjs')

exports.insertRegister = (data) =>
new Promise ((resolve, reject) => {
bcrypt.hash(data.password, 10, (err, hash) => {
  data.password = hash
  register.create(data)
  .then(res => {
    resolve({
      error: false,
      pesan: 'Berhasil Menyimpan data'
    })
  })
  .catch(() => {
    reject({
      error: true,
      pesan: 'Gagal Menyimpan Data'
    })
  })
})
})

exports.register = (data) =>
new Promise((resolve, reject) => {
  register.findOne({
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
          pesan: 'paswword salah'
        })
      }
    }
  })
})