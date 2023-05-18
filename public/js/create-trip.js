let origin;
let destination;

function initAutocomplete() {
    origin = new google.maps.places.Autocomplete(
        document.getElementById('origin'),
        {
            types: ['locality'],
            componentRestrictions: { ' country': ['ES'] },
            fields: ['place_id', 'geometry', 'name']
        });

    destination = new google.maps.places.Autocomplete(
        document.getElementById("destination"),
        {
            types: ['locality'],
            componentRestrictions: { ' country': ['ES'] },
            fields: ['place_id', 'geometry', 'name']
        });


    origin.addListener("place_changed", onPlaceChanged);
    destination.addListener("place_changed", PlaceChanged);

}

function onPlaceChanged() {
    var place = origin.getPlace();

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        document.getElementById('originId').value = place.place_id
    }
}
function PlaceChanged() {
    var place = destination.getPlace();
    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        document.getElementById('destinationId').value = place.place_id
    }

}

function miFunc() {
    var name1 = origin.getPlace().name;
    var name2 = destination.getPlace().name;
    var idname1 = origin.getPlace().place_id
    var idname2 = destination.getPlace().place_id
    window.location.replace(`createTrip/${idname1}/${idname2}`)
}
