function enviarValidarMovies(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const year = document.getElementById('year').value;
    const director = document.getElementById('director').value;
    const duration = document.getElementById('duration').value;
    const rate = document.getElementById('rate').value;
    const poster = document.getElementById('poster').value;
    
    const genreCheckboxes = Array.from(document.querySelectorAll('#genre-box input[type="checkbox"]'));
    const genreArray = genreCheckboxes.filter(checkbox => checkbox.checked).map(checkbox => checkbox.value);

    // if (!title || !year || !director || !duration || !rate || !poster) {
    //     alert('⚠️ ERROR: Todos los campos son obligatorios para crear la película.');
    //         return false;
    // }
    if (!genreArray || !Array.isArray(genreArray) || genreArray.length === 0) {
        alert('🎭 ERROR: Debes seleccionar al menos un género.');
        return false;
    }

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|bmp|webp|tiff|svg))$/i;
    if (!urlRegex.test(poster)) {
        alert('🖼️ La URL del póster debe ser válida y terminar en .jpg, .png, .gif, .bmp, .webp, .tiff o .svg');
        return;
    }

const nuevaPelicula = {
    title,
    year: Number(year),
    director,
    duration,
    genre: genreArray,
    rate: Number(rate),
    poster
    };

    console.log('📦 Enviando al backend:', nuevaPelicula);

    axios.post('http://localhost:3001/movies', nuevaPelicula)
        .then(response => {
            console.log('✅ Película creada con éxito:', response.data);
            alert('🎬 Película creada correctamente.');
            limpiarFormulario();
        })
    .catch(error => {
        console.error('❌ Error al crear la película:', error);
        if (error.response?.data?.error) {
            alert(`🚫 ${error.response.data.error}`);
        } else {
            alert(`❌ Error inesperado: ${error.message}`);
        }
});

    return true;
}

function limpiarFormulario() {
    document.getElementById('movieForm').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('movieForm');
    const botonRestablecer = document.querySelector('#btnRestablecer');

    if (form) {
        form.addEventListener('submit', enviarValidarMovies);
    }

    if (botonRestablecer) {
        botonRestablecer.addEventListener('click', limpiarFormulario);
    }
});
