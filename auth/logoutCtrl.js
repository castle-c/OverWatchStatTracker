"use strict"

angular.module('app')
  .controller('LogoutCtrl', function (AuthFactory, $location) {
    AuthFactory.userLogout()
  });
