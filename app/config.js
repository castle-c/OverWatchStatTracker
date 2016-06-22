   "use strict";
   angular.module('app')

   .config(function($routeProvider) {
    $routeProvider
      .when('/index', {
        controller: '',
        controllerAs: 'main',
        templateUrl: 'app/index.html'
      })
    .when('/battle', {
        controller: 'DataCtrl',
        controllerAs: 'd',
        templateUrl: 'app/battle.html'
      })
    .when('/select', {
        controller: 'SelectCtrl',
        controllerAs: 'main',
        templateUrl: 'app/select.html'
      })
     .when('/hiScores', {
        controller: 'ScoreCtrl',
        controllerAs: 'main',
        templateUrl: 'app/hiscores.html'
      })
     .otherwise('/')
   });
