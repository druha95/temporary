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
      .when('/create_test', {
        templateUrl: 'app/createTest/createTest.html',
        controller: 'CreateTestController',
        controllerAs: 'createTest'
      })
      .when('/results', {
        templateUrl: 'app/results/result.html',
        controller: 'ResultController',
        controllerAs: 'result'
      })
      .otherwise({
        redirectTo: '/'
      });
  }

})();
