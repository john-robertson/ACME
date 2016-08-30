'use strict';

angular.module('twinpeaksFrontendApp')
  .config(function($stateProvider) {
    $stateProvider.state('sample', {
      url: '/sample',
      templateUrl: 'app/sample/sample.html',
      controller: 'SampleController',
      controllerAs: 'vm'
    });
  });
