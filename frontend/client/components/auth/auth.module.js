'use strict';

angular.module('twinpeaksFrontendApp.auth', ['twinpeaksFrontendApp.constants',
    'twinpeaksFrontendApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
