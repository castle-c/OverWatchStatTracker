"use strict";
angular.module('app')

.controller('DataCtrl', function($scope, DataFactory, $http) {
  const d = this; //or this

  d.showProfile = function() {
  DataFactory.getProfile(d.platform, d.region, d.tag).then(data => {
      d.data = data
    console.log(d.data)

    })
  }

    d.reload = function() {
    window.location.reload()
    }

    d.postProfile = function() {
      $http.post('https://capstone-c5b9a.firebaseio.com/.json', {
        Data: d.data
     }).then(function() {
      window.location.reload()
    })
  }
})

.controller('FavCtrl', function($scope, DataFactory, $http) {
  const f = this; //or this


  f.deleteProfile = function() {
    $http.delete('https://capstone-c5b9a.firebaseio.com/.json', {
        Data: f.datas.$id
     }).then(function() {
      window.location.reload()
    })

  }

  f.showFavorites = function() {
  DataFactory.getFavorites().then(datas => {
      f.datas = datas
    console.log(f.datas)
})
}

})
