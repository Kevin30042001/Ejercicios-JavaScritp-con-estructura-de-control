function calcularDescuentoViaje() {
    const origen = document.getElementById('origen').value.toUpperCase();
    const destino = document.getElementById('destino').value;
    const descuentos = { 'LA COSTA DEL SOL': 5, 'PANCHIMALCO': 10, 'PUERTO EL TRIUNFO': 15 };
    const descuento = origen === 'PALMA' ? (descuentos[destino] || 0) : 0;
    document.getElementById('resultado6').innerText = `Descuento: ${descuento}%`;
}