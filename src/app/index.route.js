(function() {
  'use strict';

  angular
    .module('zheka')
    .config(routeConfig);

  function routeConfig($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/test', {
        templateUrl: 'app/tests/tests.html',
        controller: 'TestsController',
        controllerAs: 'tests'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
