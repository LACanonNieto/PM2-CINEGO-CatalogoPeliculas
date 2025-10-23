const { Router } = require("express");
const {getAllMovies,createMovie} = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");
const moviesController = require("../controllers/moviesController");


const router = Router();   //crea rutas internamente

router.get("/movies", getAllMovies);  //para ver en consola de thunder router.use("/movies", getAllMovies);
router.post("/movies", validateMovie, createMovie);
router.delete("/movies/:id", moviesController.deleteMovie);

module.exports = router;
