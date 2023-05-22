document.addEventListener("DOMContentLoaded", function () {
    convertirFecha();
});
console.log(document.getElementById('rating').value)
function convertirFecha() {
    var fechaOriginal = document.getElementById('rating').value;
    var fecha = new Date(fechaOriginal);
    var dia = fecha.getDate();

    var mes = fecha.getMonth() + 1; // Los meses en JavaScript se representan del 0 al 11, por lo que se suma 1
    var año = fecha.getFullYear();

    var horas = fecha.getHours();
    var minutos = fecha.getMinutes();

    var fechaConvertida = dia + "/" + mes + "/" + año;
    var horaConvertida = horas + ":" + minutos;
    console.log("fecha", fechaConvertida)

    document.getElementById("resultadoRating").textContent = fechaConvertida;
    document.getElementById("hour").textContent = horaConvertida;
}