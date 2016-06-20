/**
 * Created by andrew on 20.06.16.
 */
(function() {
  'use strict';

  angular
    .module('zheka')
    .controller('TestsController', TestsController);

  /** @ngInject */
  function TestsController() {
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
