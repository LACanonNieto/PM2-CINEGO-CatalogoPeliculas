const movieService = require("../services/movieService");

module.exports = {
    getAllMovies: async(req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        }catch (error) {
            res.status(500).json({error: "Proximamente estaran disponibles los datos de peliculas" });
        }
    },
    
    createMovie: async (req, res) => {
        try {
            const newMovie = await movieService.createMovie(req.body);
            res.status(201).json(newMovie);
        } catch (error) {
            res.status(400).json({ error: "Error al crear la pelicula" });
        }
    },
};
