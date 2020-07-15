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

  static formatMovie(movie) {
    const movieExtraInfoFilter = {
      id: true,
      title: true,
      overview: true,
      poster_path: true,
      release_date: true,
      genres: [{ name: true }],
      runtime: true,
      vote_average: true,
      videos: { results: [{ key: true }] },
      credits: { cast: [{ name: true }] },
    };
    return this.filterObj(movie, movieExtraInfoFilter);
  }

  static filterWatchLaterMovie(movie) {
    const watchLaterFilter = { watched: "true" };
    return this.filterObj(movie, watchLaterFilter);
  }
}

module.exports = Helper;
