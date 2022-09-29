const express = require('express')
const { createUser, getUser } = require('../controllers')
const User = require('../models/user')
const router = express.Router()

router.get('/getData', getUser)

router.post('/createUser', createUser)

module.exports = router
