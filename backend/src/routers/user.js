const express = require("express")
const router = new express.Router()
const User = require("../models/User")
const auth = require("../middleWare/auth")



//create a new user
router.post("/signUp", async (req, res) => {
    // const { email, password, name } = red.body
    console.log(req.body)
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
router.post("/login", async (req, res) => {

    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generatingTokens()
        res.send("hello", { user, token })
    } catch (e) {
        res.status(400).send()
    }
})

router.get("/logout", auth, async (req, res) => {
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