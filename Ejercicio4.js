function encontrarMayorNumero() {
    const a = parseFloat(document.getElementById('num1').value);
    const b = parseFloat(document.getElementById('num2').value);
    document.getElementById('resultado4').innerText = `El número mayor es: ${Math.max(a, b)}`;
}