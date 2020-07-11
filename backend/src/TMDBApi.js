const axios = require("axios")

const API_URL = "https://api.themoviedb.org/3/"
const API_KEY = "29de87d3f58e703ce82ba34e2460edcd"

class TMDBApi {

    static formatPramaters(params) {
        let formatedParams = ''
        for (let [param, value] of Object.entries(params)) {
            formatedParams = `${formatedParams}&${param}=${value}`
        }
        return formatedParams
    }

    static async searchMovies(query, peramateres = {}) {
        const url = `${API_URL}search/movie?api_key=${API_KEY}&query=${query}${this.formatPramaters(peramateres)}`
        return await axios.get(url).then(res => {
            return res.data.results
        }).catch(err => {
            return undefined
        })
    }

    static async movieDetails(movieId, extraMovieInfo = []) {
        const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}&append_to_response=${extraMovieInfo.join(",")}`
        return await axios.get(url).then(res => {
            return res.data
        }).catch(err => {
            return undefined
        })
    }
}

module.exports = TMDBApi