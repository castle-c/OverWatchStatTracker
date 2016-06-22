   "use strict";
   angular.module("app")


  .controller('RegisterCtrl', function($location, AuthFactory) {
    const auth = this;

    auth.register = function () {
      console.log("auth", auth.register);
      AuthFactory.userCreate(auth.user.email, auth.user.password)
    }
  });
