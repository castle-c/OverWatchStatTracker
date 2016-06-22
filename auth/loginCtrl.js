   "use strict";
   angular.module("app")

   .controller('LoginCtrl', function($location, AuthFactory) {
    const auth = this;

    auth.login = function () {
      console.log("auth", auth.login);
      AuthFactory.userLogin(auth.user.email, auth.user.password)

    auth.register = function() {
        $location.url('http://localhost:8080/#/register');
   }
    }
  });

