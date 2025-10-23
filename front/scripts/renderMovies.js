const axios = require("axios");

function renderMovies (movie) {
    const contenedor = document.getElementById('contenedor-peliculas');
    contenedor.innerHTML = ""; 
    
    movie.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        
        card.innerHTML = `
            <img src="${movie.poster}" alt="poster de ${movie.title}" class="movie-poster"/>
            <a href="#">${movie.title}</a>
            <div class="movie-overlay">
                <div class="movie-details">
                    <h3>${movie.title}</h3>
                    <p><strong>Año:</strong> ${movie.year}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Duración:</strong> ${movie.duration}</p>
                    <p><strong>Género:</strong> ${movie.genre.join(", ")}</p>
                    <p class="rating"><strong>Rating:</strong> ⭐ ${movie.rate}/10</p>
                    <button class="close-btn">✕ Cerrar</button>
                    <button class="btn-eliminar" data-id="${movie._id}">Eliminar Movie</button>
                </div>
            </div>
            `;
    
    const overlay = card.querySelector('.movie-overlay');
    
    card.querySelector('.movie-poster').onclick = () => overlay.classList.add('active');
    card.querySelector('.close-btn').onclick = (e) => {
        e.stopPropagation();
        overlay.classList.remove('active');
    };
    overlay.onclick = (e) => e.target === overlay && overlay.classList.remove('active');
    
    contenedor.appendChild(card);
});

document.querySelectorAll(".btn-eliminar").forEach((btn) => {
    btn.addEventListener("click", async (e) => {
      e.stopPropagation(); // evita cerrar overlay
      const id = e.target.dataset.id;

      if (confirm("¿Seguro que deseas eliminar esta película?")) {
        try {
          await axios.delete(`http://localhost:3001/movies/${id}`);
          e.target.closest(".movie-card").remove(); // quitar del DOM
          alert("Película eliminada correctamente ✅");
        } catch (error) {
          console.error("Error al eliminar la película:", error);
          alert("❌ No se pudo eliminar la película");
        }
      }
    });
  });
}

module.exports = renderMovies;
