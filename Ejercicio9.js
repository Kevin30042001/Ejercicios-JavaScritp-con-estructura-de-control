function clasificarTemperaturaFunc() {
    const celsius = parseFloat(document.getElementById('tempCelsius').value);
    const fahrenheit = celsius * 9/5 + 32;
    let resultado;
    if (fahrenheit >= 14 && fahrenheit < 32) resultado = "Temperatura baja";
    else if (fahrenheit >= 32 && fahrenheit < 68) resultado = "Temperatura adecuada";
    else if (fahrenheit >= 68 && fahrenheit < 96) resultado = "Temperatura alta";
    else resultado = "Temperatura desconocida";
    document.getElementById('resultado9').innerText = resultado;
}