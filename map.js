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
    var bounds = getBounds(L, stations, buffer);

    // Create map
    var myMap = L.map(
        'map_id',
        {maxBounds: bounds, maxZoom: 19, minZoom: 10}
    ).fitBounds(bounds);
    var tiles = L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        //maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(myMap);

    // Create markers
    var markers = [];
    for (var i = 0; i < stations.length; i++) {
        // Marker Colour
        if (stations[i].borough == "Manhattan" ||
            stations[i].mezzanine_configuration == "Central Mezzanine") {
            markerBlue = new L.circleMarker(
              [stations[i].latitude, stations[i].longitude],
              { color: 'green', fillColor: 'green', fillOpacity: '0.5', radius: '5'});
            markers.push(markerBlue);
        } else {
            markerRed = new L.circleMarker(
              [stations[i].latitude, stations[i].longitude],
              { color: 'blue', fillColor: 'blue', fillOpacity: '0.5', radius: '5'});
            markers.push(markerRed)
        };
        // Create popup
        var popupContent =
            '<b>' + stations[i].station_name + '</b>' + '<br>' +
            'Package: ' + stations[i].package + '<br>' +
            'Construction type: ' + stations[i].construction_type;
        markers[i].bindPopup(popupContent).addTo(myMap);
    }
    // alert('finishing script');
};
createMap();
