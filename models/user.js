const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    },
    result: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Result'
        }
    ]


})

const User = mongoose.model('User', userSchema)
module.exports = User