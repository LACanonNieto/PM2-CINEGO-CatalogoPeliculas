const movieService = require("../services/movieService");

module.exports = {
    getAllMovies: async(req, res) => {
        try {
            const movies = await movieService.getMovies();
            res.status(200).json(movies);
        }catch (error) {
            res.status(400).json(error);
        }
    },
    
    createMovie: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster} = req.body;
            const newMovie = await movieService.createMovie({title, year, director, duration, genre, rate, poster});
            res.status(201).json(newMovie);
        } catch (error) {
            console.log('Error al ejecutar el metodo createMovie del controlador', error);
            res.status(500).json({ error: "Error al crear la pelicula" });
        }
    },
    
        deleteMovie: async (req, res) => {
        try {
            const { id } = req.params; // se obtiene el id de la URL
            await movieService.deleteMovie(id);
            res.status(200).json({ message: "Película eliminada correctamente" });
        } catch (error) {
            console.log('Error al eliminar la película:', error);
            res.status(500).json({ error: "Error al eliminar la película" });
        }
    },
    
};

