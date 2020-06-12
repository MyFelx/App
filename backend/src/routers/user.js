const express = require("express")
const router = new express.Router()
const User = require("../models/User")
const auth = require("../middleWare/auth")

//create a new user
router.post("/MyFlex/v1/API/SignUp", async (req, res) => {

    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generatingTokens()
        res.status(201).send({ user, token })
    } catch (e) {
        res.status(400).send(e)
    }
})


//login the user
router.post("/MyFlex/v1/API/LogIn", async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generatingTokens()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//get my profile
router.get("/MyFlex/v1/API/LoggedIn", auth, async (req, res) => {
    res.status(200).send(req.user)
})

// logout the user 
router.get("/MyFlex/v1/API/Logout", auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(eachToken => {
            return eachToken.token != req.token
        })

        await req.user.save()
        res.send(req.user)

    } catch (e) {
        res.status(500).send()

    }
})


module.exports = router