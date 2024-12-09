document.getElementById('calculateButton').addEventListener('click', function() {
    // Obtener los valores ingresados
    const birthDate = document.getElementById('birthDate').value;
    const currentDate = document.getElementById('currentDate').value;

    // Validar formato básico
    if (!birthDate.match(/^\d{2}-\d{2}-\d{4}$/) || !currentDate.match(/^\d{2}-\d{2}-\d{4}$/)) {
        document.getElementById('result').innerText = "Por favor, ingresa fechas en el formato DD-MM-YYYY.";
        return;
    }

    // Extraer el año de la fecha de nacimiento
    let anioNacimiento = "";
    let parteActual = 0;
    for (let char of birthDate) {
        if (char === '-') {
            parteActual++;
        } else if (parteActual === 2) {
            anioNacimiento += char;
        }
    }

    // Extraer el año de la fecha actual
    let anioActual = "";
    parteActual = 0;
    for (let char of currentDate) {
        if (char === '-') {
            parteActual++;
        } else if (parteActual === 2) {
            anioActual += char;
        }
    }

    // Convertir años a números y calcular edad
    anioNacimiento = parseInt(anioNacimiento);
    anioActual = parseInt(anioActual);

    const edad = anioActual - anioNacimiento;

    // Mostrar resultado
    document.getElementById('result').innerText = `Tienes ${edad} años.`;
});