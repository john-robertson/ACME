'use strict';

angular.module('twinpeaksFrontendApp')
  .directive('leafletBasicDirective', function () {
    return {
      restrict: 'E',
      scope: {
        mapwidth: '@',
        mapheight: '@',
        mapid: '@',
        data: '='
      },
      bindToController: {
        mapid: '@',
        data: '='
      },
      templateUrl: 'components/leaflet-basic/leaflet-basic.html',
      controller: 'LeafletBasicController',
      controllerAs: 'vm'
    };
  });
