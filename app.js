$(document).ready(function () {
    $('#convertirTexto').click(function () {
        const texto = $('#texto').val();
        const morse = $('#morse').val();
        
        // Validación de morse para asegurarse de que solo contenga caracteres alfanuméricos
        const validacionMorse = /^[a-zA-Z0-9]+$/;

        if (!texto || !morse) {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, llena ambos campos.',
            });
            return;
        }

        if (!validacionMorse.test(morse)) {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'El campo "Morse" solo debe contener caracteres alfanuméricos.',
            });
            return;
        }
        
        // Crear una expresión regular que coincida solo con caracteres en morse
        const regex = new RegExp(`[${morse}]`, 'gi');
        const coincidencias = (texto.match(regex) || []).length; // Contar las coincidencias

        Swal.fire({
            icon: 'info',
            title: 'Resultado',
            text: `El texto contiene ${coincidencias} coincidencias del caracter "${morse}".`,
        });
    });

    $('#limpiarCampos').click(function () {
        $('#texto').val('');
        $('#morse').val('');
    });
});
