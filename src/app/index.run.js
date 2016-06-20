(function() {
  'use strict';

  angular
    .module('zheka')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
