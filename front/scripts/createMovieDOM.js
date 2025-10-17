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

    console.log('✅ Formulario válido. Datos ingresados:', {
        titulo,
        año,
        director,
        duracion,
        generos: generosSeleccionados,
        raiting,
        poster
    });
    
    alert('✅ Formulario válido. Todos los campos están completos.');
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
