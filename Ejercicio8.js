function generarTabla() {
    const num = parseInt(document.getElementById('numTabla').value);
    let tabla = '';
    for (let i = 1; i <= 10; i++) {
        tabla += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById('resultado8').innerText = tabla;
}