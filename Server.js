const express = require('express')()
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const port = 9000
const cors = require('cors')
const mongooseurldb = 'mongodb://127.0.0.1/tiketkereta'

express.use(cors ())
mongoose.connect(mongooseurldb, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('connect mongodb'))
.catch((err) => console.log(err))

express.use(bodyparser.urlencoded({extended: false}))
express.use(bodyparser.json({extended: false}))


express.use('/daftartiket', require('./routers/Adaftartkt'))
express.use('/admin', require('./routers/adminrouters'))
express.use('/user', require('./routers/userregisterR'))

express.listen(port, () => {
  console.log(`Server Running at ${port}`)
})