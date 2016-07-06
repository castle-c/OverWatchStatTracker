"use strict";
angular.module('app')


.factory('DataFactory', (function($http) {
  let d = null;

  return {

  getProfile(platform, region, tag) {
    return $http
      .get('https://api.lootbox.eu/' + platform + '/' + region + '/' + tag + '/quick-play' + '/allHeroes/')
      .then(response => response.data)
      console.log(response.data)
      .then(res => d = res)
  },

  getFavorites() {
    return $http
      .get('https://capstone-c5b9a.firebaseio.com/favories.json')
      .then(response => response.data)
      console.log(response.data)
      .then(res => d = res)
    },

    getHeroes() {
    return $http
      .get('https://capstone-c5b9a.firebaseio.com/heroes.json')
      .then(response => response.data)
      console.log(response.data)
      .then(res => d = res)
    }
  }
   }))
