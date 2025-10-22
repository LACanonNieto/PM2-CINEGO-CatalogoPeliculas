const Movie = require('../models/Movie'); 

module.exports = {
    getMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    createMovie: async (movieData) => {
        try {
        const newMovie = await Movie.create(movieData);
        return newMovie;
        } catch (error) {   
            console.log('Error al ejecutar el metodo createMovie del servicio', error);     
        }                               
    },
};
