const express = require('express')
const db = require('./config/mongoose')
const PORT = 8000
const app = express()


app.use(express.urlencoded())
app.use(express.json())
app.use('/', require('./routes'))




app.listen(PORT, (err) => {
    if(err)console.log("Error occured!", err)
    console.log("Server started on port", PORT)
})