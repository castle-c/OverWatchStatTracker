"use strict";
angular.module('app')

.factory('AuthFactory', (function($http) {

const users = {

    };

    const currentUser = null;

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
    }




  }
}))

