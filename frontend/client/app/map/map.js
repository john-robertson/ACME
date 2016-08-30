'use strict';

angular.module('twinpeaksFrontendApp')
  .config(function($stateProvider) {
    $stateProvider.state('map', {
      url: '/map',
      templateUrl: 'app/map/map.html',
      controller: 'MapController',
      controllerAs: 'vm'
    });
  });
