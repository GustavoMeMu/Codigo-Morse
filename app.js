$(document).ready(function () {
    $('#convertirTexto').click(function () {
        const texto = $('#texto').val();
        const morse = $('#morse').val();
        if (!texto || !morse) {
            Swal.fire({
                icon: 'warning',
                title: '¡Atención!',
                text: 'Por favor, llena ambos campos.',
            });
            return;
        }
        const coincidencias = texto.toLowerCase().split(morse.toLowerCase()).length - 1;
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
