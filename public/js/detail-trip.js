function initMap() {
    const directionsService = new google.maps.DirectionsService();
    const directionsRenderer = new google.maps.DirectionsRenderer();
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 7,
        center: { lat: 40.416775, lng: -3.70379 },
    });

    directionsRenderer.setMap(map);

    calculateAndDisplayRoute(directionsService, directionsRenderer);
}

function calculateAndDisplayRoute(directionsService, directionsRenderer) {
    const startLocation = "Madrid";
    const endLocation = "Valencia";

    directionsService.route({
        origin: {
            placeId: document.getElementById("start").value,
        },
        destination: {
            placeId: document.getElementById("end").value,
        },
        travelMode: google.maps.TravelMode.DRIVING,
    }, (response, status) => {
        if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(response);

            const route = response.routes[0];
            const duration = route.legs[0].duration.text;

            document.getElementById("duration").textContent = "Duración: " + duration;
        } else {
            window.alert("No se pudo calcular la ruta.");
        }
    });
}