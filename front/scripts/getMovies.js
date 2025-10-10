const renderMovies = require("./renderMovies");

function getMovies() {
$.get("https://students-api.up.railway.app/movies", function(data) {
    renderMovies(data)
    });
}

module.exports = getMovies;
