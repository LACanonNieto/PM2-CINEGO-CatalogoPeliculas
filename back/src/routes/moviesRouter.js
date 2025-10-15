const { Router } = require("express");
const getAllMovies = require("../controllers/moviesController");

const router = Router();   //crea rutas internamente

router.get("/movies", getAllMovies);  //para ver en consola de thunder router.use("/movies", getAllMovies);

module.exports = router;
