/**
 * Created by andrew on 21.06.16.
 */

/**
 * Created by andrew on 20.06.16.
 */
(function() {
  'use strict';

  angular
    .module('zheka')
    .controller('CreateTestController', CreateTestController);

  /** @ngInject */
  function CreateTestController() {
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
