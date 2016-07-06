angular.module('app', ['ngRoute'])

 .constant('FB', 'https://capstone-c5b9a.firebaseio.com')
  .config(() => (
    firebase.initializeApp({
    apiKey: "AIzaSyCpzxyYhw4vG7AosrsiGuXwzGagji2-pu4",
    authDomain: "capstone-c5b9a.firebaseapp.com",
    databaseURL: "https://capstone-c5b9a.firebaseio.com",
    storageBucket: "capstone-c5b9a.appspot.com",
  })))

