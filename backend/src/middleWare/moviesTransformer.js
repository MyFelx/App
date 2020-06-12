const axios = require("axios")

const moviesTransformer = async (req, res, next) => {
    const searchMoviesURL = "https://api.themoviedb.org/3/search/movie?api_key=29de87d3f58e703ce82ba34e2460edcd&language=en-US&query=" + req.query.name + "&page=1&include_adult=false"
    const allowed = ["id", "title", "overview", "poster_path", "release_date"]
    const moviesList = []

    await axios.get(searchMoviesURL)
        .then((res) => {
            res.data.results.forEach((eachMovie) => {
                const filtered = Object.keys(eachMovie)
                    .filter(key => allowed.includes(key))
                    .reduce((obj, key) => {
                        obj[key] = eachMovie[key];
                        return obj;
                    }, {});
                moviesList.push(filtered)
            });
        })

    req.movies = moviesList

    next()
}

module.exports = moviesTransformer 
