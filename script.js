function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove('seleccionado'));
    link.classList.add('seleccionado');

    // Aquí ocultamos el menú en pantallas móviles
    var nav = document.getElementById("nav");
    nav.classList.remove("responsive");
}

function responsiveMenu() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}
