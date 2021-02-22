const express = require("express");
const router = new express.Router();
const Helper = require("../Helper");
const TMDBApi = require("../TMDBApi");
const User = require("../models/User");
const auth = require("../middleWare/auth");

// searching for a movie
router.get("/myFlex/api/v1/search/movie", auth, async (req, res) => {
  try {
    const user = req.user;
    const respone = await TMDBApi.searchMovies(req.query.searchQuery);
    const formatedResponse = Helper.formatMovies(respone);
    const injectedFormatedResponse = Helper.injectWatchedToMovies(
      user.movies,
      formatedResponse
    );
    res.send(injectedFormatedResponse);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/myFlex/api/v1/movie", async (req, res) => {
  try {
    const movie = await TMDBApi.movieDetails(req.query.searchQuery, [
      "videos",
      "credits",
    ]);
    const formatedResponse = Helper.formatMovie(movie);
    res.send(formatedResponse);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
