'use strict';

(function () {

  class MapController {

    constructor($http) {
      var vm = this;

      vm.config = {
      	cache: true,
      	responseType: 'json',
      	params: {
      		'format': 'json'
      	}
      };

      $http.get('/rest/osm/', vm.config).then(function (response) {
      	vm.data = response.data;
      });
      

      vm.$onInit = function () {};
    }

  }

  angular.module('twinpeaksFrontendApp')
    .controller('MapController', MapController)
})();
