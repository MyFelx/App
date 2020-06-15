const express = require("express")
const router = new express.Router()
const Helper = require("../Helper")
const TMDBApi = require("../TMDBApi")

// searching for a movie
router.get("/MyFlex/v1/API/movies", async (req, res) => {
    try {
        const respone = await TMDBApi.searchMovies(req.query.searchQuery)
        const formatedResponse = Helper.formatMovies(respone)
        res.send(formatedResponse)
    } catch (e) {
        res.status(400).send(e)
    }
})


module.exports = router
