const express = require('express')
const passport = require('passport')
const cookieParser = require('cookie-parser')
const db = require('./config/mongoose')
const PORT = 8000
const app = express()


app.use(express.urlencoded())
app.use(express.json())
app.use(cookieParser())
app.use(require('express-session')({ secret: 'blah', resave: true, saveUninitialized: true }));
app.use(passport.initialize())
app.use(passport.session())



app.use('/', require('./routes'))




app.listen(PORT, (err) => {
    if(err)console.log("Error occured!", err)
    console.log("Server started on port", PORT)
})