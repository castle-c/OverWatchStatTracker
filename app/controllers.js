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

    d.postProfile = function() {
      $http.post('https://capstone-c5b9a.firebaseio.com/.json', {
        Data: d.data
     }).then(function() {
      window.location.reload()
    })
  }

  d.deleteProfile = function() {
    $http.delete('https://capstone-c5b9a.firebaseio.com/.json', {
        Data: d.datas
     }).then(function() {
      window.location.reload()
    })

  }

  d.showFavorites = function() {
  DataFactory.getFavorites().then(datas => {
      d.datas = datas
    console.log(d.datas)
})
}
})
