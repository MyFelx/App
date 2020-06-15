
class Helper {
    static formatMovie(movie) {
        const allowed = ["id", "title", "overview", "poster_path", "release_date"]
        return Object.keys(movie)
            .filter(key => allowed.includes(key))
            .reduce((obj, key) => {
                obj[key] = movie[key];
                return obj;
            }, {});

    }
    static formatMovies(movies) {
        const moviesList = []
        movies.forEach(movie => {
            moviesList.push(this.formatMovie(movie))
        })
        return moviesList
    }

}

module.exports = Helper
