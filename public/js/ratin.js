

function convertirARating() {
    var numero = document.getElementById('rating').value; // Aquí puedes cambiar el número de rating
    var rating = '';
    var estrellaLlena = '★';
    var estrellaVacia = '☆';

    var ratingRedondeado = Math.round(numero);

    for (var i = 0; i < ratingRedondeado; i++) {
        rating += estrellaLlena;
    }

    for (var j = ratingRedondeado; j < 5; j++) {
        rating += estrellaVacia;
    }

    document.getElementById("resultadoRating").textContent = rating;
}