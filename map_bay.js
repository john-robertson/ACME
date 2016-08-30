// Calculate the bounds of a map to ensure all objects are visible
// Each of the objects must have a .latitude and a .longitude property
getBounds = function (L, latLongObjects, buffer) {
    // Create arrays of latitudes and longitudes
    var latitudes = [];
    var longitudes = [];
    for (var i = 0; i < latLongObjects.length; i++) {
        latitudes.push(latLongObjects[i].latitude);
        longitudes.push(latLongObjects[i].longitude);
    }
    // Get max and min coordinates
    var latMin = Math.min.apply(null, latitudes);
    var latMax = Math.max.apply(null, latitudes);
    var longMin = Math.min.apply(null, longitudes);
    var longMax = Math.max.apply(null, longitudes);
    // Get bounds
    var southWest = L.latLng(latMin - buffer, longMax + buffer);
    var northEast = L.latLng(latMax + buffer, longMin - buffer);
    var bounds = L.latLngBounds(southWest, northEast);
    return bounds;
}

createMap = function() {

    // alert('starting script');
    // Get bounds
    var buffer = 0.1;
    var bounds = getBounds(L, muniStops, buffer);

    // Create map
    var myMap = L.map(
        'map_id',
        {maxBounds: bounds, maxZoom: 19, minZoom: 10}
    ).fitBounds(bounds);
    var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(myMap);

    // Create markers
    var markers = [];
    for (var i = 0; i < muniStops.length; i++) {
        // Marker Colour
        markerBlue = new L.circleMarker(
          [muniStops[i].latitude, muniStops[i].longitude],
          { color: 'green', fillColor: 'green', fillOpacity: '0.5', radius: '3'});
        markers.push(markerBlue);
        // Create popup
        var popupContent =
            '<b>' + muniStops[i].stop_name + '</b>' + '<br>' +
            //'Package: ' + muniStops[i].package + '<br>' +
            'Stop ID: ' + muniStops[i].stop_id;
        markers[i].bindPopup(popupContent).addTo(myMap);
    }
    // alert('finishing script');
};
createMap();
