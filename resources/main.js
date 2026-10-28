var title = document.getElementById("title");
var boton = document.getElementById("miBoton");
var caja = document.getElementById("miCaja");
var mensaje = document.getElementById("mensaje");
var imagen = document.getElementById("imagen");

// Funciones para modificar

const ORIGINAL_TITLE = title.textContent;
const ORIGINAL_IMG = imagen.src;

function eventoTitle() {
    if (title.textContent === ORIGINAL_TITLE) {
        title.textContent = 'Título cambiado desde el DOM';
    } else {
        title.textContent = ORIGINAL_TITLE;
    }
}

function eventoImagen() {
    if (imagen.src.includes('PibbleMexicano.jpg')) {
        imagen.src = ORIGINAL_IMG;
    } else {
        imagen.src = 'resources/imagenes/PibbleMexicano.jpg';
    }
}

function eventoBoton(){
    caja.classList.toggle('activo');
    if(caja.classList.contains('activo')){
        mensaje.textContent='El estado actual es ACTIVADO'
        miBoton.classList.add('miBoton')
    } else {
        mensaje.textContent='Haz click para alternar el estado'
    }
}

function eventoBoton2(){
    const p = document.getElementById('mensaje2');
    const q = document.getElementById('miBoton2');
    p.remove();
    q.remove();
}