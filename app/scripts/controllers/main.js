'use strict';

/**
 * @ngdoc function
 * @name angularMagicDbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMagicDbApp
 */
angular.module('angularMagicDbApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
