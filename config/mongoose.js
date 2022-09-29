const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/student_db2')


const db = mongoose.connection

db.once('open', (err) => {
    console.log("Successfully connected to DB!")
})


module.exports = mongoose