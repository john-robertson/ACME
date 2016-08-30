'use strict';

(function () {

  class MainController {

    constructor($http) {
      var vm = this;

      vm.httpConfig = {
        cache: true,
        responseType: 'json',
        params: {
          'format': 'json'
        }
      };

      $http.get('/rest', vm.httpConfig).then(function(response){
        vm.routes = response.data;
      }).catch(function(){
        vm.routes = 'No response from API';
      });

      vm.$onInit = function () {};
    }

  }

  angular.module('twinpeaksFrontendApp')
    .controller('MainController', MainController);
})();
