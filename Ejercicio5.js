function calcularDescuentoCoche() {
    const modelo = document.getElementById('modeloCoche').value;
    const descuentos = { 'FORD FIESTA': 5, 'FORD FOCUS': 10, 'FORD ESCAPE': 20 };
    document.getElementById('resultado5').innerText = `Modelo: ${modelo}, Descuento: ${descuentos[modelo] || 0}%`;
}