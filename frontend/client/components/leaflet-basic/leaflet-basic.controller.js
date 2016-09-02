'use strict';

(function () {

  class LeafletBasicController {

    constructor($scope, leafletData) {
      var vm = this;
      vm.initializing = true;

      angular.extend(vm, {
        world: {
          lat: 0,
          lng: 0,
          zoom: 1
        },
        defaults: {
          zoomControl: true,  
          zoomControlPosition: 'topright',
          attributionControl: false,
          scrollWheelZoom: true,
          layerControl: false
        },
        layers: {
          baselayers: {
            osm: {
              name: 'OpenStreetMap',
              url: 'http://{s}.tile.stamen.com/toner-lite/{z}/{x}/{y}.png',
              type: 'xyz',
              layerOptions: {
                opacity: 1,
                detectRetina: true,
                reuseTiles: true,
                maxZoom: 17,
                showOnSelector: false
              }
            },
          },
          overlays: {}
        }
      });

/* AC Transit Real Time Vehicle Positions
      $scope.$watch('data', function (data) {
        if (data) {
          angular.extend(vm, {
            geojson: {
              data: data,
              pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 5,
                  fillColor: 'blue',
                  color: '#000',
                  weight: 0.6,
                  opacity: 1,
                  fillOpacity: 0.6
                }).bindPopup('Vehicle id: <b>' + feature.id + '</b><br>' + 
                'Route id: <b>' + feature.properties.route_id + '</b>');
              }
            }
          });*/


//  511 Events
      $scope.$watch('data', function (data) {
        if (data) {
          angular.extend(vm, {
            geojson: {
              data: data,
              pointToLayer: function (feature, latlng) {
                return L.circleMarker(latlng, {
                  radius: 5,
                  fillColor: '#D50000',
                  color: '#000',
                  weight: 0.6,
                  opacity: 1,
                  fillOpacity: 0.6
                }).bindPopup('Event: <b>' + feature.properties.headline + '</b><br>' + 
                'Type: <b>' + feature.properties.event_type + '</b><br>' + 
                'Updated: <b>' + feature.properties.updated + '</b>');
              }
            }
          });


          leafletData.getMap(vm.mapid).then(function (map) {
            setTimeout(function () {
              map.fitBounds(L.geoJson(data).getBounds());
            }, 0);
          });
        }
      });
    }
  }

  angular.module('twinpeaksFrontendApp')
    .controller('LeafletBasicController', LeafletBasicController);
})();

