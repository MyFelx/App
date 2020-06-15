const mongoose = require("mongoose")

const movieSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    overview: {
        type: String,
        required: true
    },
    poster_path: {
        type: String,

    },
    release_date: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie