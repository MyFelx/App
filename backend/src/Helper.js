const movieFilter = ["id", "title", "overview", "poster_path", "release_date"]

class Helper {

    static filterObject(object, movieFilter = []) {
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
            moviesList.push(this.filterObject(movie, movieFilter))
        })
        return moviesList
    }

    static formatMovie(movie) {
        return this.filterObject(movie, movieFilter)
    }

    static filterWatchLaterMovie(movie) {
        const watchLaterFilter = ["id", "watched"]
        return this.filterObject(movie, watchLaterFilter)
    }

}

module.exports = Helper
