class Movie {
    constructor({ title, year, director, duration, genre, rate, poster }) {

        if (!title) {
            throw new Error("El campo 'title' es obligatorio");
        }
        if (!poster) {
            throw new Error("El campo 'poster' es obligatorio");
        }
        if (!director) {
            throw new Error("El campo 'director' es obligatorio");
        }

        this.title = title;
        this.year = year;
        this.director = director;
        this.duration = duration;
        this.genre = genre;
        this.rate = rate;
        this.poster = poster;
    }
}

module.exports = Movie;