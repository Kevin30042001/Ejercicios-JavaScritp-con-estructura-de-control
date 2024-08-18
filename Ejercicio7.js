function iniciarAnalisisNumeros() {
    let negativos = 0, positivos = 0, multiplos15 = 0, sumaPares = 0;
    for (let i = 0; i < 10; i++) {
        const num = parseInt(prompt(`Número ${i + 1}:`));
        if (num < 0) negativos++;
        if (num > 0) positivos++;
        if (num % 15 === 0) multiplos15++;
        if (num % 2 === 0) sumaPares += num;
    }
    document.getElementById('resultado7').innerText = `Negativos: ${negativos}, Positivos: ${positivos}, Múltiplos de 15: ${multiplos15}, Suma de pares: ${sumaPares}`;
}