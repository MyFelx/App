const express = require("express")
const router = new express.Router()
const User = require("../models/User")
const auth = require("../middleWare/auth")
const Movie = require("../models/Movie")
const { ObjectID } = require("mongodb")
const Helper = require("../Helper")
const TMDBApi = require("../TMDBApi")

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

// adding a movie to your list 
router.patch("/myFlex/api/v1/user/list", auth, async (req, res) => {
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
router.get("/myFlex/api/v1/user/list", auth, async (req, res) => {
    try {
        const user = req.user
        const moviesIDList = []

        for (let i = 0; i < user.movies.length; i++) {
            moviesIDList.push(user.movies[i]._id.toString())
        }
        const movies = await Movie.find({ _id: { $in: moviesIDList } })

        const myMovies = []

        movies.forEach(element => {
            const movieIndex = user.movies.findIndex(movie => movie.TMDB_Id === element.id)
            element = { ...element._doc, ...user.movies[movieIndex]._doc }
            myMovies.push(element)
        });

        res.send(myMovies)
    } catch (err) {
        res.status(400).send(err)
    }
})


//removing a movie 
router.delete("/myFlex/api/v1/user/list", auth, async (req, res) => {
    try {
        const user = req.user
        const movieIndex = user.movies.findIndex(movie => movie.TMDB_Id === req.body.id)
        user.movies.splice(movieIndex, 1)
        user.save()
        res.send("Movie removed Succecfully")
    } catch (e) {
        res.status(400).send(err)
    }
})


module.exports = router