function enviarValidarMovies(event){
    event.preventDefault();
    const getValue = (attrs) => document.getElementById(attrs).value.trim();
    
    const titulo = getValue('titulo');
    const año = getValue('año');
    const director = getValue('director');
    const duracion = getValue('duracion');
    const raiting = getValue('raiting');
    const poster = getValue('poster');

    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const generosSeleccionados = Array.from(checkboxes).map(cb => cb.previousElementSibling.textContent);

    if (!titulo || !año || !director || !duracion || !raiting || !poster) {
        alert('⚠️ ERROR: Todos los campos son obligatorios para crear la película.');
        return false;
    }
    
    if (generosSeleccionados.length === 0) {
        alert('🎭 ERROR: Debes seleccionar al menos un género.');
        return false;
    }

const nuevaPelicula = {
    title: titulo,
    year: Number(año),
    director,
    duration: duracion,
    genre: generosSeleccionados,
    rate: Number(raiting),
    poster: poster
    };

    console.log('📦 Enviando al backend:', nuevaPelicula);

    // 🚀 Petición POST con Axios
    axios.post('http://localhost:3001/movies', nuevaPelicula)
        .then(response => {
            console.log('✅ Película creada con éxito:', response.data);
            alert('🎬 Película creada correctamente.');

            limpiarFormulario();

        })
        .catch(error => {
            console.error('❌ Error al crear la película:', error);
            alert('Ocurrió un error al crear la película. Revisa la consola.');
        });

    return true;
}


function limpiarFormulario(){
    const attrs = ['titulo', 'año', 'director', 'duracion', 'raiting', 'poster'];  
    attrs.forEach(attr => {
        document.getElementById(attr).value = '';
    });
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
    }


document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('form');
    const botonCrear = document.querySelector('.btn-primary');
    const botonRestablecer = document.querySelector('.btn-danger');
    
    if (botonCrear) {
        botonCrear.addEventListener('click', enviarValidarMovies);
    }

    if (botonRestablecer) {
        botonRestablecer.addEventListener('click', limpiarFormulario);
    }
});
