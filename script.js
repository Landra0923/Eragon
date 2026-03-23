function irAlNodo(numeroNodo) {
    // 1. Obtener el elemento del nodo seleccionado
    const nodoDestino = document.getElementById(`nodo-${numeroNodo}`);
    if (!nodoDestino) return;

    // 2. Cambiar visibilidad de los textos
    const todosLosNodos = document.querySelectorAll('.nodo-contenido');
    todosLosNodos.forEach(nodo => nodo.classList.remove('activo'));
    nodoDestino.classList.add('activo');

    // 3. Extraer coordenadas y zoom de los atributos data-
    const x = nodoDestino.getAttribute('data-x');
    const y = nodoDestino.getAttribute('data-y');
    const zoom = nodoDestino.getAttribute('data-zoom');

    // 4. Referencias a los elementos del mapa
    const mapa = document.getElementById('mapa-img');
    const marcador = document.getElementById('marcador-punto');

    // 5. Aplicar la lógica de movimiento
    if (numeroNodo === 0) {
        // Reseteo para la portada
        mapa.style.transformOrigin = "center center";
        mapa.style.transform = "scale(1)";
        marcador.style.display = "none";
    } else {
        // Movimiento de precisión
        // El transform-origin actúa como el "anclaje" del zoom
        mapa.style.transformOrigin = `${x} ${y}`;
        mapa.style.transform = `scale(${zoom})`;

        // Colocar el marcador exactamente en el mismo punto
        marcador.style.display = "block";
        marcador.style.left = x;
        marcador.style.top = y;
    }
}

// Iniciar en la portada al cargar
window.onload = () => irAlNodo(0);