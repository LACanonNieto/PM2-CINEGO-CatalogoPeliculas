const { Router } = require("express");
const {getAllMovies,createMovie} = require("../controllers/moviesController");
const validateMovie = require("../middlewares/validateMovie");


const router = Router();   //crea rutas internamente

router.get("/movies", getAllMovies);  //para ver en consola de thunder router.use("/movies", getAllMovies);
router.post("/movies", validateMovie, createMovie);

module.exports = router;
