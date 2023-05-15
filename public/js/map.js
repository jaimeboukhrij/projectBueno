let autocomplete;
function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            types: ['establishment'],
            componentRestrictions: { ' country': ['AU'] },
            fields: ['place_id', 'geometry', 'name']
        });


    autocomplete.addListener("place_changed", onPlaceChanged);

}

function onPlaceChanged() {
    var place = autocomplete.getPlace();
    console.log(place)
    if (!place.geometry) {
        // User did not select a prediction; reset the input field7
        document.getElementById('autocomplete').placeholder =
            'Enter a place';
    } else {
        // Display details about the valid place
        document.getElementById('details').innerHTML = place.name;
    }
}