function irAlNodo(n) {
    const destino = document.getElementById(`nodo-${n}`);
    if (!destino) return;

    // Cambiar visibilidad
    document.querySelectorAll('.nodo-contenido').forEach(node => node.classList.remove('activo'));
    destino.classList.add('activo');

    // RESET DEL SCROLL: Importante para que el nuevo texto empiece arriba
    document.querySelector('.seccion-texto').scrollTo({ top: 0, behavior: 'smooth' });

    // Datos del mapa
    const x = destino.getAttribute('data-x');
    const y = destino.getAttribute('data-y');
    const zoom = destino.getAttribute('data-zoom');
    const h2 = destino.querySelector('h2');

    const mapa = document.getElementById('mapa-img');
    const marcador = document.getElementById('marcador-punto');
    const etiqueta = marcador.querySelector('.etiqueta-mapa');

    if (n === 0) {
        mapa.style.transformOrigin = "center center";
        mapa.style.transform = "scale(1)";
        marcador.style.display = "none";
    } else {
        mapa.style.transformOrigin = `${x} ${y}`;
        mapa.style.transform = `scale(${zoom})`;
        marcador.style.display = "block";
        marcador.style.left = x;
        marcador.style.top = y;
        etiqueta.innerText = h2 ? h2.innerText : "";
    }
}

function cambiarTab(e, tabId) {
    const parent = e.currentTarget.closest('.nodo-contenido');
    parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('activo'));
    parent.querySelectorAll('.tab-contenido').forEach(c => c.classList.remove('activo'));
    
    e.currentTarget.classList.add('activo');
    document.getElementById(tabId).classList.add('activo');
}

window.onload = () => irAlNodo(0);