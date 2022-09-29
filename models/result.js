const mongoose = require('mongoose')

const resultSchema = new mongoose.Schema({

    marks: {
        type: Number,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },

    grade: {
        type: String,
        enum: ['A', 'B', 'C']
    }

})


const Result = mongoose.model('Result', resultSchema)
module.exports = Result

