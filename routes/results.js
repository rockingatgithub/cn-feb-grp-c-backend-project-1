const express = require('express')
const Result = require('../models/result')
const User = require('../models/user')
const router = express.Router()

router.post('/createResult', async (req, res) => {

    console.log(req.body)
    const result = await Result.create(req.body)

    if(!result){
        return res.status(500).json({
            data: "result not created!",
        })
    }

    // update the users result array ......

    const user = await User.findById(req.body.user)
    user.result.push(result.id)
    await user.save()

    return res.status(200).json({
        data: result,
    })

})

module.exports = router
