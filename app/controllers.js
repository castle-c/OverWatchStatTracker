"use strict";
angular.module('app')

.controller('DataCtrl', function($scope, DataFactory, $http) {
  const d = this; //or this



  d.showProfile = function() {
  DataFactory.getProfile(d.platform, d.region, d.tag, d.mode).then(data => {
      d.data = data
    console.log(d.data)

     })
  }

  d.showHero = function() {
  DataFactory.getHero(d.platform, d.region, d.tag, d.mode, d.hero).then(data => {
      d.data = data
      for (let dato in d.data) {
        var dats = d.data[dato]
        console.log(dats)
        d.dats = dats
      }

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
      $http.post('https://capstone-c5b9a.firebaseio.com/favorites.json', {
        Data: d.data
     }).then(function() {
      window.location.reload()
    })
  }

   d.postHero = function() {
      $http.post('https://capstone-c5b9a.firebaseio.com/heroes.json', {
        Data: d.data
     }).then(function() {
      window.location.reload()
    })
  }
})

.controller('FavCtrl', function($scope, DataFactory, $http) {
  const f = this; //or this


  f.deleteProfile = function() {
    $http.delete('https://capstone-c5b9a.firebaseio.com/favorites.json', {
        Data: f.datas.$id
     }).then(function() {
      window.location.reload()
    })
   }

       f.deleteHero = function() {
    $http.delete('https://capstone-c5b9a.firebaseio.com/heroes.json', {
        Data: f.dat.$id
     }).then(function() {
      window.location.reload()
    })
   }

 f.showHeroes = function() {
  DataFactory.getHeroes().then(dat => {
      f.dat= dat
      for (let dato in f.dat) {
        var datx = f.dat[dato]
        console.log(datx)
        f.datx = datx
      }
    //     firebase.database().ref('Heroes').orderByChild('data / key').on('value', (snapshot) => {
    //     var ob = snapshot.val();

    //     for(var ke in ob) {
    //       var oby = ob[ke]
    //       console.log(oby)
    //       f.oby = oby
    //   }
    // })
    })
}

  f.showFavorites = function() {
  DataFactory.getFavorites().then(datas => {
      f.datas = datas

   for (let dati in f.datas) {
        var datz = f.datas[dati]
        console.log(datz)
        f.datz = datz
      }
      // firebase.database().ref('Favorites').orderByChild('data / key').on('value', (snapshot) => {
      //   var obj = snapshot.val();

      //   for(var key in obj) {
      //     var objy = obj[key]
      //     console.log(objy)
      //     f.objy = objy
    //   }
    // })
    })
}
})

// var ref = firebase.database().ref();



