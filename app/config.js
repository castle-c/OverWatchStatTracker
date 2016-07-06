   "use strict";
   angular.module('app')

   .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        controller: '',
        controllerAs: 'main',
        templateUrl: 'app/index.html'
      })
    .when('/search', {
        controller: 'DataCtrl',
        controllerAs: 'd',
        templateUrl: 'app/battle.html'
      })
    .when('/favorites', {
        controller: 'FavCtrl',
        controllerAs: 'f',
        templateUrl: 'app/fav.html'
      })
     .when('/hero', {
        controller: 'FavCtrl',
        controllerAs: 'f',
        templateUrl: 'app/hero.html'
      })
      .when('/herosearch', {
        controller: 'DataCtrl',
        controllerAs: 'd',
        templateUrl: 'app/heroes.html'
      })
     .otherwise('/')
   });
