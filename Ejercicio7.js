document.getElementById('formAnalisis').addEventListener('submit', function(e) {
    e.preventDefault();
    let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;
    const inputs = this.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        const num = parseInt(input.value);
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplos15++;
        if (num % 2 === 0) sumaPares += num;
    });
    document.getElementById('resultado7').innerText = `Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplos15}, Suma de pares: ${sumaPares}`;
});