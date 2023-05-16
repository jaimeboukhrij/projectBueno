let origin;
let destination;
let date;

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
    var place = destination.getPlace();
    console.log(place.name)

    if (!place.geometry) {
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        document.getElementById('details').innerHTML = place.name;
    }

}

function miFunc() {
    var name1 = origin.getPlace().name;
    var name2 = destination.getPlace().name;
    var idname1 = origin.getPlace().place_id
    var idname2 = destination.getPlace().place_id
    date = document.getElementById('dayDeparture').value
    window.location.replace(`seachTrip/${date}/${name1}/${name2}/${idname1}/${idname2}`)
}
