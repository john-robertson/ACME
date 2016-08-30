'use strict';

angular.module('twinpeaksFrontendApp', ['twinpeaksFrontendApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngMaterial', 'nemLogging', 'ui-leaflet'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
