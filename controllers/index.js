const User = require("../models/user");

module.exports.createUser = ( req, res ) => {

    console.log(req.body)

    User.create(req.body, (err, user) => {

        if(err){
            console.log(err);
            return res.status(401).json({
                message: "User not Created!"
            })

        }

        return res.status(200).json({
            data: user.name,
            message: "User successfully Created!"
        })

    })

}

module.exports.getUser = async (req, res) => {
    
    const user = await User.find({}).populate('book').populate('result')
    return res.status(200).json({
        data: user,
        message: "Users fetched successfully!"
    })

}