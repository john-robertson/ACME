'use strict';

(function () {

  class AboutMeController {

    constructor($http) {
      var vm = this;

      vm.name = 'John Robertson'
      vm.title = 'Intern'
      vm.office = 'San Francisco'

      vm.$onInit = function () {
      };

      vm.config = {
      	cache: true,
      	responseType: 'json',
      	params: {
      		'format': 'json'
      	}
      };

      $http.get('/rest/511/', vm.config).then(function (response) {
      	vm.data = response.data;
      });
    }

  }

  angular.module('twinpeaksFrontendApp')
    .controller('AboutMeController', AboutMeController);
})();
