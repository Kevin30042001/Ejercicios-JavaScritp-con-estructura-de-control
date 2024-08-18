function calcularNota() {
    const nombre = document.getElementById('nombre').value;
    const carnet = document.getElementById('carnet').value;
    const examen = parseFloat(document.getElementById('examen').value);
    const tareas = parseFloat(document.getElementById('tareas').value);
    const asistencia = parseFloat(document.getElementById('asistencia').value);
    const investigacion = parseFloat(document.getElementById('investigacion').value);
    const nota = examen * 0.2 + tareas * 0.4 + asistencia * 0.1 + investigacion * 0.3;
    document.getElementById('resultado2').innerText = `${nombre} (${carnet}): Nota final = ${nota.toFixed(2)}`;
}