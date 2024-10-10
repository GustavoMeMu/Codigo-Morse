document.addEventListener('DOMContentLoaded', function() {
    let texto = '';

    // Guardar el texto ingresado
    document.getElementById('guardarTexto').addEventListener('click', function() {
        texto = document.getElementById('texto').value.trim();
        if (texto) {
            Swal.fire('Texto guardado', 'El texto ha sido guardado correctamente', 'success');
        } else {
            Swal.fire('Error', 'Por favor ingresa un texto válido', 'error');
        }
    });

    // Buscar el texto ingresado
    document.getElementById('buscarTexto').addEventListener('click', function() {
        const busqueda = document.getElementById('busqueda').value;
        if (!texto) {
            Swal.fire('Error', 'No hay texto guardado para buscar', 'error');
            return;
        }

        if (busqueda === '') {
            Swal.fire('Error', 'Por favor ingresa una palabra o carácter para buscar', 'error');
            return;
        }

        const validacion = busqueda.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const expresion = new RegExp(validacion, 'gi'); // Se agrega la bandera 'i' para ignorar mayúsculas/minúsculas
        const coincidencias = texto.match(expresion);
        const numCoincidencias = coincidencias ? coincidencias.length : 0;

        Swal.fire('Resultado de la búsqueda', `Se encontraron ${numCoincidencias} coincidencias de "${busqueda}" en el texto`, 'info');
    });

    // Reemplazar texto
    document.getElementById('reemplazarTexto').addEventListener('click', function() {
        const busqueda = document.getElementById('busqueda').value;
        const reemplazo = document.getElementById('reemplazar').value;

        if (!texto) {
            Swal.fire('Error', 'No hay texto guardado para reemplazar', 'error');
            return;
        }

        if (busqueda === '' || reemplazo === '') {
            Swal.fire('Error', 'Por favor ingresa tanto la palabra a buscar como la palabra de reemplazo', 'error');
            return;
        }

        const validacion = busqueda.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const expresion = new RegExp(validacion, 'gi'); // Se agrega la bandera 'i' para ignorar mayúsculas/minúsculas
        texto = texto.replace(expresion, reemplazo);

        Swal.fire('Reemplazo exitoso', `Se han reemplazado todas las coincidencias de "${busqueda}" por "${reemplazo}"`, 'success');
        document.getElementById('texto').value = texto; // Actualiza el área de texto con el nuevo texto
    });

    // Limpiar los campos
    document.getElementById('limpiarCampos').addEventListener('click', function() {
        document.getElementById('texto').value = '';
        document.getElementById('busqueda').value = '';
        document.getElementById('reemplazar').value = '';
        texto = '';
        Swal.fire('Campos Limpiados', 'Todos los campos han sido limpiados', 'success');
    });
});
