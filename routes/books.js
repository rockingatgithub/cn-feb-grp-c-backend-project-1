const express = require('express')
const Book = require('../models/book')
const User = require('../models/user')
const router = express.Router()


router.post('/createBook', (req, res) => {
    console.log(req.body)

    Book.create(req.body, (err, book) => {

        if(err){
            console.log(err);
            return res.status(401).json({
                message: "User not Created!"
            })

        }

        return res.status(200).json({
            data: book.name,
            message: "Book successfully Created!"
        })

    } )

})

router.patch('/assignBook/:book', (req, res) => {

    console.log(req.body)
    console.log(req.params.book)


    User.findByIdAndUpdate(req.body.user, {book: req.params.book}  , (err, user) => {

        if(err){
            console.log(err);
            return res.status(401).json({
                message: "User not Created!"
            })

        }

        return res.status(200).json({
            data: user.name,
            message: "Book successfully Assigned!"
        })

    })



})


module.exports = router
