  let imagenActual = 0;

    const diapositivas = document.querySelectorAll(
        ".carrusel .diapositiva"
    );

    function mostrarImagen(numero) {
        if (diapositivas.length === 0) return;

        diapositivas.forEach(function(diapositiva) {
            diapositiva.classList.remove("activa");
        });

        imagenActual =
            (numero + diapositivas.length) % diapositivas.length;

        diapositivas[imagenActual].classList.add("activa");
    }

    function cambiarImagen(direccion) {
        mostrarImagen(imagenActual + direccion);
    }

    // Cambio automatico cada 5 segundos
    setInterval(function() {
        cambiarImagen(1);
    }, 5000);

// Boton para volver arriba

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("volverArriba").addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
