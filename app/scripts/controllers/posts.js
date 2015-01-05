'use strict';

/**
 * @ngdoc function
 * @name angularMagicDbApp.controller:PostsCtrl
 * @description
 * # PostsCtrl
 * Controller of the angularMagicDbApp
 */
angular.module('angularMagicDbApp')
  .controller('PostsCtrl', function ($scope) {
    $scope.posts = [
      { title: 'HTML5 Boilerplate', body: 'Lorem ipsum...', author: 'J.D. Salinger' }
    ];
  });
