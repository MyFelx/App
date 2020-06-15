const express = require("express")
const router = new express.Router()
const Movie = require("../models/Movie")
const Helper = require("../Helper")
const { ObjectID } = require("mongodb")
const TMDBApi = require("../TMDBApi")
const auth = require("../middleWare/auth")


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

// adding a movie to your list 
router.post("/MyFlex/v1/API/add/WatchList", auth, async (req, res) => {
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
    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = router
