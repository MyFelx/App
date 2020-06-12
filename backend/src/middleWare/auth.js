const User = require("../models/User")
const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

    try {
        // const token = req.header("Authorization").replace("Bearer ", "")
        const newToken = req.body.token
        const decodeTheToken = jwt.verify(newToken, "myFlex")
        const user = await User.findOne({ _id: decodeTheToken._id, "tokens.token": newToken })

        if (!user) {
            throw new Error()
        }
        req.token = newToken
        req.user = user
        next()

    } catch (e) {
        res.status(401).send({ error: "Please authenticate" })
    }
}

module.exports = auth