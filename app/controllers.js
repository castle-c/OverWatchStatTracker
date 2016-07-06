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

   d.sig = function() {
    let sigy = 'https://api.lootbox.eu/' + d.platform + '/' + d.region + '/' + d.tag + '/signature' + '/avatar' + '/signature.png'
    d.sigy = sigy
    console.log(d.sigy)
  }

    d.reload = function() {
    window.location.reload()
    }

    d.postProfile = function() {
      $http.post('https://capstone-c5b9a.firebaseio.com/all.json', {
        Data: d.data
     }).then(function() {
      window.location.reload()
    })
  }
})

.controller('FavCtrl', function($scope, DataFactory, $http) {
  const f = this; //or this


  f.deleteProfile = function() {
    $http.delete('https://capstone-c5b9a.firebaseio.com/all.json', {
        Data: f.datas.$id
     }).then(function() {
      window.location.reload()
    })

  }

  f.showFavorites = function() {
  DataFactory.getFavorites().then(datas => {
      f.datas = datas
      console.log(f.datas)
      // for (let dats in f.datas) {
      //   var datz = f.datas[dats]
      //   console.log(datz)
      //   for (let k in datz) {
      //    var dat = datz[k]
      //    console.log(dat)
      //   }
      // }
      firebase.database().ref('all').orderByChild('data / key').on('value', (snapshot) => {
        var obj = snapshot.val();

        for(var key in obj) {
          var objy = obj[key]
          console.log(objy)
          f.objy = objy
      }
    })
    })
}
})

// var ref = firebase.database().ref();



