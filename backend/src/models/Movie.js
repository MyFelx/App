const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  overview: {
    type: String,
    required: true,
  },
  poster_path: {
    type: String,
  },
  vote_average: {
    type: String,
    required: true,
  },
  genres: {
    type: Object,
  },
});
const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
