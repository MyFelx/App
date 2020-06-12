const express = require("express")
const router = new express.Router()
const moviesTransformers = require("../middleWare/moviesTransformer")


router.get("/MyFlex/v1/API/movies", moviesTransformers, (req, res) => {
    try {
        res.send(req.movies)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router
