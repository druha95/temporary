(function() {
  'use strict';

  angular
    .module('zheka')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;

    vm.blocksList = [
      {
        link: "assets/images/pospolita.jpg"
      },
      {
        link: "assets/images/pospolita.jpg"
      },
      {
        link: "assets/images/pospolita.jpg"
      },
      {
        link: "assets/images/pospolita.jpg"
      },
      {
        link: "assets/images/pospolita.jpg"
      },
      {
        link: "assets/images/pospolita.jpg"
      },
    ]

  }
})();
