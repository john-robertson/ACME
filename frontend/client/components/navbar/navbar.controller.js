'use strict';

class NavbarController {

  constructor() {
    var nav = this;
    nav.menu = [
      {title: 'Sample', state: 'sample'},
      {title: 'Map', state: 'map'},
      {title: 'Workspace', state: 'workspace'}
    ];
  }


}

angular.module('twinpeaksFrontendApp')
  .controller('NavbarController', NavbarController);
