let origen;
let destino;

function initAutocomplete() {
    origen = new google.maps.places.Autocomplete(
        document.getElementById('origen'),
        {
            types: ['locality'],
            componentRestrictions: { ' country': ['ES'] },
            fields: ['place_id', 'geometry', 'name']
        });

    destino = new google.maps.places.Autocomplete(
        document.getElementById("destino"),
        {
            types: ['locality'],
            componentRestrictions: { ' country': ['ES'] },
            fields: ['place_id', 'geometry', 'name']
        });


    origen.addListener("place_changed", onPlaceChanged);
    destino.addListener("place_changed", PlaceChanged);

}

function onPlaceChanged() {
    var place = origen.getPlace();
    console.log(place)
    if (!place.geometry) {
        // User did not select a prediction; reset the input field7
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        document.getElementById('details').innerHTML = place.name;
        return
    }
}
function PlaceChanged() {
    var place = destino.getPlace();
    console.log(place.name)

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        document.getElementById('details').innerHTML = place.name;
    }

}

function miFunc() {
    var name1 = origen.getPlace().name;
    var name2 = destino.getPlace().name;
    var idname1 = origen.getPlace().place_id
    var idname2 = destino.getPlace().place_id
    window.location.replace(`seachTrip/${name1}/${name2}/${idname1}/${idname2}`)
}
