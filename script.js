// Función para el botón de la portada
function irAlSiguienteNodo() {
    // Busca el siguiente nodo (en este caso el Nodo 1 cuando lo crees)
    const proximoNodo = document.getElementById("nodo-1");
    if (proximoNodo) {
        proximoNodo.scrollIntoView({ behavior: 'smooth' });
    } else {
        console.log("Aún no has creado el Nodo 1");
    }
}

// Lógica para detectar el scroll y mover el mapa
const mapa = document.getElementById('mapa-img');
const nodos = document.querySelectorAll('.nodo-narrativo');

const observerOptions = {
    threshold: 0.6 // Se activa cuando el 60% del nodo es visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const x = entry.target.getAttribute('data-x');
            const y = entry.target.getAttribute('data-y');
            const zoom = entry.target.getAttribute('data-zoom');

            // Aplicar transformación al mapa
            // El translate(-50%, -50%) es para que el zoom sea desde el centro
            mapa.style.transform = `scale(${zoom}) translate(${x}px, ${y}px)`;
        }
    });
}, observerOptions);

nodos.forEach(nodo => observer.observe(nodo));