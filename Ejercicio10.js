function calcularPromedioEdades() {
    const turnos = [5, 6, 11];
    const promedios = turnos.map((estudiantes, i) => {
        let suma = 0;
        for (let j = 0; j < estudiantes; j++) {
            suma += parseInt(prompt(`Edad estudiante ${j + 1} del turno ${['mañana', 'tarde', 'noche'][i]}:`));
        }
        return suma / estudiantes;
    });
    const mayorPromedio = Math.max(...promedios);
    const turnoMayor = ['Mañana', 'Tarde', 'Noche'][promedios.indexOf(mayorPromedio)];
    document.getElementById('resultado10').innerText = `Promedios: Mañana ${promedios[0].toFixed(2)}, Tarde ${promedios[1].toFixed(2)}, Noche ${promedios[2].toFixed(2)}
    Turno con mayor promedio: ${turnoMayor}`;
}