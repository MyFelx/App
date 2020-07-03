const express = require("express")
const router = new express.Router()
const Helper = require("../Helper")
const TMDBApi = require("../TMDBApi")

// searching for a movie
router.get("/myFlex/api/v1/search/movie", async (req, res) => {
    try {
        const respone = await TMDBApi.searchMovies(req.query.searchQuery)
        const formatedResponse = Helper.formatMovies(respone)
        res.send(formatedResponse)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get("/myFlex/api/v1/movie", async (req, res) => {
    try {
        const movie = await TMDBApi.movieDetails(req.query.searchQuery, ["videos", "credits"])
        const formatedResponse = Helper.formatMovie(movie)
        res.send(formatedResponse)
    } catch (e) {
        res.status(400).send(e)
    }

})

module.exports = router
