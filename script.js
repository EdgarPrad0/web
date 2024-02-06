function incrementarNumero(contador) {
    const numeroInput = document.getElementById(`numeroInput${contador}`);
    const numeroActualElement = document.getElementById(`numeroActual${contador}`);

    // Obtener el número ingresado
    const numeroIngresado = parseInt(numeroInput.value);

    // Obtener el último número mostrado para el contador específico
    let numeroActual = parseInt(localStorage.getItem(`ultimoNumero${contador}`)) || 0;

    // Validar si se ingresó un número
    if (!isNaN(numeroIngresado)) {
        // Guardar el último número mostrado
        localStorage.setItem(`ultimoNumero${contador}`, numeroIngresado);

        // Mostrar el número ingresado
        numeroActual = numeroIngresado;
    } else {
        // Incrementar el último número mostrado en 1
        numeroActual += 1;

        // Guardar el último número mostrado
        localStorage.setItem(`ultimoNumero${contador}`, numeroActual);
    }

    // Mostrar el número actual
    numeroActualElement.textContent = numeroActual;

    // Limpiar el campo de entrada
    numeroInput.value = '';
}
