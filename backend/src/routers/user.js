const express = require("express");
const router = new express.Router();
const User = require("../models/User");
const auth = require("../middleWare/auth");
const Movie = require("../models/Movie");
const { ObjectID } = require("mongodb");
const Helper = require("../Helper");
const TMDBApi = require("../TMDBApi");
const ERRORS = require("../../../enums/Errors");
const jwt = require("jsonwebtoken");

//create a new user
router.post("/myFlex/api/v1/signgup", async (req, res) => {
  const emailExists =
    (await User.findOne({ email: req.body.email }).countDocuments()) !== 0;
  const userNameExists =
    (await User.findOne({ username: req.body.username }).countDocuments()) !==
    0;

  const user = new User(req.body);
  try {
    await user.HashThePassword();
    await user.save();
    const token = await user.generatingTokens();
    res.status(200).send({ user, token });
  } catch (e) {
    if (emailExists) {
      res.status(400).send({ errorCode: ERRORS.EMAIL_EXISTS });
    } else if (userNameExists) {
      res.status(400).send({ errorCode: ERRORS.USERNAME_EXISTS });
    } else if (e.message) {
      res.status(400).send({ errorCode: ERRORS.INVALID_EMAIL });
    }
  }
});

//login as Guest
router.post("/myFlex/api/v1/login/guest", async (req, res) => {
  const randomID = Math.floor(Math.random() * 10000);
  const username = "Guest - " + randomID;
  const email = "Guest-" + randomID + "@guest.com";
  const password = randomID;
  const user = new User({ username, email, password });

  try {
    await user.HashThePassword();
    await user.save();
    const token = await user.generatingTokens();
    res.status(200).send({ user, token, guest: true });
  } catch (e) {
    if (e.message) {
      res.status(400).send({ errorCode: ERRORS.INVALID_EMAIL });
    }
  }
});

//login the user
router.post("/myFlex/api/v1/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.loginValue,
      req.body.password
    );
    const token = await user.generatingTokens();
    res.send({ user, token });
  } catch (e) {
    res.status(400).send({ errorCode: ERRORS.UNABLE_TO_LOGIN });
  }
});

//get my profile
router.get("/myFlex/api/v1/user", auth, async (req, res) => {
  res.status(200).send(req.user.name);
});

// logout the user
router.post("/myFlex/api/v1/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((eachToken) => {
      return eachToken.token != req.token;
    });

    await req.user.save();
    res.send(req.user);
  } catch (e) {
    console.log(e);
    res.status(500).send();
  }
});
// adding a movie to your list
router.patch("/myFlex/api/v1/user/list", auth, async (req, res) => {
  try {
    const user = req.user;
    const formatResponse = Helper.filterWatchLaterMovie(req.body);
    const movieIndex = user.movies.findIndex(
      (movie) => movie.TMDB_Id === req.body.id
    );

    if (movieIndex !== -1) {
      user.movies[movieIndex] = {
        ...user.movies[movieIndex]._doc,
        ...formatResponse,
      };
    } else {
      const movieExists = await Movie.findOne({ id: req.body.id });
      if (movieExists === null) {
        const movie = await TMDBApi.movieDetails(req.body.id);
        const formatedMovie = Helper.formatMovieToSave(movie);
        const movieID = new ObjectID();
        const mongoMovie = new Movie({ ...formatedMovie, _id: movieID });
        await mongoMovie.save();
        user.movies = user.movies.concat({
          _id: movieID,
          TMDB_Id: req.body.id,
          ...formatResponse,
          genres: formatedMovie.genres,
        });
      } else {
        user.movies = user.movies.concat({
          _id: movieExists._id,
          TMDB_Id: req.body.id,
          ...formatResponse,
          genres: movieExists.genres,
        });
      }
    }

    user.save();
    res.send("Movie Added Succecfully");
  } catch (err) {
    res.status(400).send(err);
  }
});

// getting my movies list
router.get("/myFlex/api/v1/user/list", auth, async (req, res) => {
  try {
    const user = req.user;
    const moviesIDList = [];

    for (let i = 0; i < user.movies.length; i++) {
      moviesIDList.push(user.movies[i]._id.toString());
    }
    const movies = await Movie.find({ _id: { $in: moviesIDList } });
    const myMovies = [];

    movies.forEach((eachMovie) => {
      const movieIndex = user.movies.findIndex(
        (movie) => movie.TMDB_Id === eachMovie.id
      );
      const formatResponse = Helper.filterWatchLaterMovie(
        user.movies[movieIndex]._doc
      );
      eachMovie = { ...eachMovie._doc, ...formatResponse };
      myMovies.push(eachMovie);
    });

    res.send(myMovies);
  } catch (err) {
    res.status(400).send(err);
  }
});

//removing a movie
router.delete("/myFlex/api/v1/user/list", auth, async (req, res) => {
  try {
    const user = req.user;
    const movieIndex = user.movies.findIndex(
      (movie) => movie.TMDB_Id === req.body.id
    );
    user.movies.splice(movieIndex, 1);
    user.save();
    res.send("Movie removed Succecfully");
  } catch (e) {
    res.status(400).send(err);
  }
});

//get reccomendations
router.get("/myFlex/api/v1/user/recommendations", auth, async (req, res) => {
  try {
    const user = req.user;
    if (user.movies.length > 0) {
      const genresPref = {};
      let firstGenres = Number;
      for (let i = 0; i < user.movies.length; i++) {
        rating = user.movies[i].rating === null ? 5 : user.movies[i].rating;
        for (let j = 0; j < user.movies[i].genres.length; j++) {
          const genre = user.movies[i].genres[j].id;
          if (i === 0 && j === 0) {
            firstGenres = genre;
          }

          if (genresPref[genre]) {
            genresPref[genre] += rating;
          } else {
            genresPref[genre] = rating;
          }
        }
      }
      let max = genresPref[firstGenres];
      let min = genresPref[firstGenres];
      for (const rating in genresPref) {
        if (genresPref[rating] > max) {
          max = genresPref[rating];
        } else if (genresPref[rating] < min) {
          min = genresPref[rating];
        }
      }
      const range = max - min;
      const with_genres = [];
      const without_genres = [];

      for (const rating in genresPref) {
        if (genresPref[rating] > range / 2) {
          with_genres.push(rating);
        } else {
          without_genres.push(rating);
        }
      }
      console.log(req.query.page)
      const movies = await TMDBApi.discoverForRecommendations(
        with_genres,
        without_genres,
        req.query.page
      );
      const formatedResponse = Helper.formatMovies(movies);
      const injectedFormatedMoveies = Helper.injectWatchedToMovies(
        user.movies,
        formatedResponse
      );
      res.send(injectedFormatedMoveies);
    } else {
      const popularMovies = await TMDBApi.getPopular(req.query.page);
      const formatedMovies = Helper.formatMovies(popularMovies);

      res.send(formatedMovies);
    }
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
});

module.exports = router;
