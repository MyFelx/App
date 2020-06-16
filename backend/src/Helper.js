const movieFilter = ["id", "title", "overview", "poster_path", "release_date"]
const watchLaterFilter = ["id", "watched"]

class Helper {

    static filter(object, movieFilter = []) {
        return Object.keys(object)
            .filter(key => movieFilter.includes(key))
            .reduce((obj, key) => {
                obj[key] = object[key];
                return obj;
            }, {});
    }

    static formatMovies(movies) {
        const moviesList = []
        movies.forEach(movie => {
            moviesList.push(this.filter(movie, movieFilter))
        })
        return moviesList
    }

    static formatMovie(movie) {
        return this.filter(movie, movieFilter)
    }

    static filterWatchLaterMovie(movie) {
        return this.filter(movie, watchLaterFilter)
    }

}

module.exports = Helper
