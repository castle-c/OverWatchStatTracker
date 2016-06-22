"use strict";
angular.module('app')

.controller('DataCtrl', function($scope, DataFactory) {
  const d = this; //or this

  d.showProfile = function() {
  DataFactory.getProfile(d.platform, d.region, d.tag).then(data => {
      d.data = data

console.log(data)

    })
  }
})
