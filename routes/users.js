const express = require('express')
const { createUser, getUser } = require('../controllers')
const User = require('../models/user')
const passport = require('../config/passport-local')
const router = express.Router()

router.get('/getData', passport.authenticate('local', { failureRedirect: '/login' }) , getUser)

router.post('/createUser', createUser)

router.post('/login', createSession)

module.exports = router
