"use strict";
angular.module('app')

.factory('AuthFactory', (function($http) {

  return {

userCreate(email, password) {
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage);
        // ...
      }); //create user
    },

    userLogin(email, password) {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorMessage );
        // ...
      }); //sign in
    },

    userLogout() {
      firebase.auth().signOut().then(function() {
        // Sign-out successful.
      }, function(error) {
        // An error happened. //logout
      });
    }
  }
}))

