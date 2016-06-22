"use strict";
angular.module('app')


.factory('DataFactory', (function($http) {
  let d = null;

  return {

  getProfile(platform, region, tag) {
    return $http
      .get('https://api.lootbox.eu/' + platform + '/' + region + '/' + tag + '/profile')
      .then(response => response.data)
      console.log(response.data)
      .then(res => d = res)
  }
   }
 }))
