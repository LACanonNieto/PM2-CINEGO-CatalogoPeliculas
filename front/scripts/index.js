const axios = require("axios");
const renderMovies = require("./renderMovies");

async function getMovies() {
    try{
        const response = await axios.get("http://localhost:3001/movies");
        const movies = response.data;
        renderMovies(movies);
    } catch (error){
        alert("No se pudieron cargar las peliculas", error);
        console.log(error);
    }
}

getMovies();
