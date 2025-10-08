const contenedor = document.getElementById('contenedor-peliculas');

$.get("https://students-api.up.railway.app/movies", (data) => {
    renderMovies(data)
});


const renderMovies = (data) => {
    data.forEach(movie => {
        const card = document.createElement("div");
        card.className = "movie-card";
        
        card.innerHTML = `
            <img src="${movie.poster}" alt="poster de  ${movie.title}" class="movie-poster"/>
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
                </div>
            </div>
        `;

contenedor.appendChild(card);
    });

    addClickEvents();
}

function addClickEvents() {
    const posters = document.querySelectorAll('.movie-poster');
    const overlays = document.querySelectorAll('.movie-overlay');
    const closeBtns = document.querySelectorAll('.close-btn');

posters.forEach((poster, index) => {
    poster.addEventListener('click', () => {
        overlays[index].classList.add('active');
    });
});


closeBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        overlays[index].classList.remove('active');
    });
});

overlays.forEach(overlay => {
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.classList.remove('active');
        }
    });
});
}

