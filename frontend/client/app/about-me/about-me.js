'use strict';

angular.module('twinpeaksFrontendApp')
  .config(function($stateProvider) {
    $stateProvider.state('aboutme', {
      url: '/aboutme',
      templateUrl: 'app/about-me/about-me.html',
      controller: 'AboutMeController',
      controllerAs: 'vm'
    });
  });
