function verificarEdad() {
    const edad = parseInt(document.getElementById('edad').value);
    document.getElementById('resultado1').innerText = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}