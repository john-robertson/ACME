'use strict';

(function () {

  class SampleController {

    constructor() {
      var vm = this;

      vm.$onInit = function () {
      };
    }

  }

  angular.module('twinpeaksFrontendApp')
    .controller('SampleController', SampleController);
})();
