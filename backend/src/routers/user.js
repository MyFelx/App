const express = require("express")
const router = new express.Router()
const User = require("../models/User")
const auth = require("../middleWare/auth")

//create a new user
router.post("/myFlex/api/v1/signgup", async (req, res) => {

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
router.post("/myFlex/api/v1/login", async (req, res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generatingTokens()
        res.send({ user, token })
    } catch (e) {
        res.status(400).send()
    }
})

//get my profile
router.get("/myFlex/api/v1/user", auth, async (req, res) => {
    res.status(200).send(req.user.name)
})



router.post("/myFlex/api/v1/logout", auth, async (req, res) => {
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