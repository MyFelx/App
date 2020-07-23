import noPoster from "./NoPoster.jpg";

class Helper {
  static getFirstNCast(obj, n) {
    const castList = [];
    const castNumber = obj.length > n ? n : obj.length;
    for (let i = 0; i < castNumber; i++) {
      castList.push(obj[i].name);
    }
    return castList.join(", ");
  }

  static movieTransformer(movieDetails) {
    const movieData = {
      movieTitle: movieDetails.title,
      poster: movieDetails.poster_path
        ? "https://image.tmdb.org/t/p/original/" + movieDetails.poster_path
        : noPoster,
      IMDb: movieDetails.vote_average,
      runTime: movieDetails.runtime,
      genres: movieDetails.genres
        .map((each) => {
          return each.name;
        })
        .join(", "),
      releaseDate: movieDetails.release_date,
      cast:
        movieDetails?.credits?.cast?.length > 0
          ? this.getFirstNCast(movieDetails.credits.cast, 5)
          : "N/A",
      info: movieDetails.overview,
      trailerID: movieDetails.videos.results[0]
        ? movieDetails.videos.results[0].key
        : "NA",
    };
    return movieData;
  }
}

export default Helper;
