const express = require("express")
const router = new express.Router()
const Movie = require("../models/Movie")
const auth = require("../middleWare/auth")

// getting my movies list
router.get("/MyFlex/v1/API/MyList", auth, async (req, res) => {
    try {
        const user = req.user
        const moviesIDList = []

        for (let i = 0; i < user.movies.length; i++) {
            moviesIDList.push(user.movies[i]._id.toString())
        }
        const movies = await Movie.find({ _id: { $in: moviesIDList } })

        res.send(movies)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
