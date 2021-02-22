class Helper {
  static filterObj(obj, filter) {
    let result = {};
    for (let [key, value] of Object.entries(filter)) {
      if (obj[key] !== undefined) {
        if (typeof filter[key] === "object" && !Array.isArray(value)) {
          result[key] = this.filterObj(obj[key], value);
        } else if (Array.isArray(value)) {
          const formatedArray = [];
          obj[key].forEach((eachObj) => {
            formatedArray.push(this.filterObj(eachObj, value[0]));
          });
          result[key] = formatedArray;
        } else {
          result[key] = obj[key];
        }
      }
    }
    return result;
  }

  static formatMovies(movies) {
    const movieFilter = {
      id: true,
      title: true,
      overview: true,
      poster_path: true,
      vote_average: true,
    };
    const moviesList = [];
    movies.forEach((movie) => {
      moviesList.push(this.filterObj(movie, movieFilter));
    });
    return moviesList;
  }

  static formatMovieToSave(movie) {
    const movieFilter = {
      id: true,
      title: true,
      overview: true,
      poster_path: true,
      vote_average: true,
      genres: true,
    };

    return this.filterObj(movie, movieFilter);
  }
  // Will check if the movie is in the list of user movies and add watched or added to the object.
  static injectWatchedToMovies(userMovies, formatedMovies) {
    for (let i = 0; i < formatedMovies.length; i++) {
      const movieIndex = userMovies.findIndex(
        (movie) => movie.TMDB_Id === formatedMovies[i].id
      );
      if (movieIndex !== -1) {
        formatedMovies[i] = {
          isAdded: true,
          ...formatedMovies[i],
          ...userMovies[movieIndex]._doc,
        };
      } else {
        formatedMovies[i].isAdded = false;
        formatedMovies[i].watched = false;
      }
    }
    return formatedMovies;
  }

  static formatMovie(movie) {
    const movieExtraInfoFilter = {
      id: true,
      title: true,
      overview: true,
      poster_path: true,
      release_date: true,
      genres: true,
      runtime: true,
      vote_average: true,
      videos: { results: [{ key: true }] },
      credits: { cast: [{ name: true }] },
    };
    return this.filterObj(movie, movieExtraInfoFilter);
  }

  static filterWatchLaterMovie(movie) {
    const watchLaterFilter = { watched: "true", rating: "true" };
    return this.filterObj(movie, watchLaterFilter);
  }
}

module.exports = Helper;
