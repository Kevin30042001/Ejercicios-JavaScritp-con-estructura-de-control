function calcularAumentoSalarial() {
    const nombre = document.getElementById('nombreEmpleado').value;
    const salario = parseFloat(document.getElementById('salario').value);
    const categoria = document.getElementById('categoria').value;
    const aumentos = { A: 0.15, B: 0.30, C: 0.10, D: 0.20 };
    const aumento = salario * (aumentos[categoria] || 0);
    document.getElementById('resultado3').innerText = `${nombre}: Salario $${salario}, Aumento $${aumento.toFixed(2)}, Nuevo salario $${(salario + aumento).toFixed(2)}`;
}