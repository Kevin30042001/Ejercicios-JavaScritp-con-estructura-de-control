document.getElementById('formEdades').addEventListener('submit', function(e) {
    e.preventDefault();
    const turnos = ['mañana', 'tarde', 'noche'];
    const promedios = turnos.map((turno, i) => {
        const inputs = this.querySelectorAll(`.turno:nth-child(${i+1}) input`);
        let suma = 0;
        inputs.forEach(input => suma += parseInt(input.value));
        return suma / inputs.length;
    });
    const mayorPromedio = Math.max(...promedios);
    const turnoMayor = turnos[promedios.indexOf(mayorPromedio)];
    document.getElementById('resultado10').innerText = `Promedios: Mañana ${promedios[0].toFixed(2)}, Tarde ${promedios[1].toFixed(2)}, Noche ${promedios[2].toFixed(2)}
    Turno con mayor promedio: ${turnoMayor.charAt(0).toUpperCase() + turnoMayor.slice(1)}`;
});