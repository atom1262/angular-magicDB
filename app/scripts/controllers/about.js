'use strict';

/**
 * @ngdoc function
 * @name angularMagicDbApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularMagicDbApp
 */
angular.module('angularMagicDbApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.posts = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
