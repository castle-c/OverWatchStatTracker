   "use strict";
   angular.module("app")

   .controller('LoginCtrl', function($location, AuthFactory) {
    const auth = this;

    let currentUser = null;

     auth.logout = function() {
      console.log("ferferf")
firebase.auth().signOut().then(function() {
  $location.path('/login')
}, function(error) {
  // An error happened.
})
},

    auth.login = function () {
      AuthFactory.userLogin(auth.user.email, auth.user.password)
      // $location.url('/search')

      firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    currentUser = user.uid
    console.log(user.uid)
    $location.path('/search')
  } else {
    $location.path('/login');
    console.log("not signed in")
  }
})

var user = firebase.auth().currentUser;
var email, uid;

if (user != null) {
  email = user.email;
  uid = user.uid;
}


// var user = firebase.auth().currentUser;

// user.updateProfile({
// }).then(function() {
//   // Update successful.
// }, function(error) {
//   // An error happened.
// })

  auth.getUser = function() {
        // console.log("hey, this is the currentUser!", currentUser );
        return currentUser;
        console.log(currentUser)
      }
   }
 })


