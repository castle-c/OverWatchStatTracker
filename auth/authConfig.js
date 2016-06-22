   "use strict";
   angular.module("app")


   .config(function($routeProvider) {
    $routeProvider
    .when('/login', {
        controller: 'LoginCtrl',
        controllerAs: 'auth',
        templateUrl: '/auth/login.html'
      })
     .when('/register', {
        controller: 'RegisterCtrl',
        controllerAs: 'auth',
        templateUrl: '/auth/register.html'
      })
      .when('/logout', {
        controller: 'LogoutCtrl',
        controllerAs: 'auth',
        template: ''
      })
    })
