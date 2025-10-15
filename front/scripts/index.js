const renderMovies = require("./renderMovies");
const axios = require("axios");

// function getMovies() {
// $.get("https://students-api.up.railway.app/movies", function(data) {
//     renderMovies(data)
//     });
// }

////////////////Con Promesas////////////////////////////
// function getMovies(){
//     const promise = axios.get("https://students-api.up.railway.app/movies");
//     promise.then((respuesta) => {
//         const movies = respuesta.data;
//         renderMovies(movies);
//     })
//     .catch ((error) => {
//         console.error("Error al obtener las peliculas:", error.message);
//     });
// }

///////////////////Con Async///////////////////////////

async function getMovies() {
    try{
        const response = await axios.get("https://students-api.up.railway.app/movies");
        const movies = response.data;
        renderMovies(movies);
    } catch (error){
        alert("ocurrio un error", error);
        console.log(error);
    }
}

getMovies();
