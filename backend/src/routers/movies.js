const express = require("express")
const router = new express.Router()
const Helper = require("../Helper")
const { ObjectID } = require("mongodb")
const Movie = require("../models/Movie")
const TMDBApi = require("../TMDBApi")
const auth = require("../middleWare/auth")


// adding a movie to your list 
router.post("/MyFlex/v1/API/add/toWatchList", auth, async (req, res) => {
    try {

        const user = req.user
        const movieExists = await Movie.findOne({ id: req.body.id })

        if (movieExists === null) {
            const movie = await TMDBApi.movieDetails(req.body.id)
            const formatedMovie = Helper.formatMovie(movie)
            const movieID = new ObjectID()
            const mongoMovie = new Movie({ ...formatedMovie, _id: movieID })
            await mongoMovie.save()
            user.movies = user.movies.concat({ _id: movieID, TMDB_Id: req.body.id })
        } else {
            user.movies = user.movies.concat({ _id: movieExists._id, TMDB_Id: req.body.id })
        }
        user.save()
        res.send("Movie Added Succecfully")
    } catch (err) {
        res.status(400).send(err)
    }
})



module.exports = router
