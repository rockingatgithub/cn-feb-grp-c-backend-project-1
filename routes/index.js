const express = require('express')
const router = express.Router()


router.use('/user', require('./users') )
router.use('/book', require('./books') )
router.use('/result', require('./results') )




module.exports = router