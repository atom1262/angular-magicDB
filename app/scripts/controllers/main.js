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
    $scope.tricks = [
    {title: 'Test Trick', description: 'Test Description', type: 'Opener'},
    {title: 'Card Trick', description: 'Test Description', type: 'Closer'},
    {title: 'Saw in Half', description: 'Test Description', type: 'Other'},
    {title: 'Disappear', description: 'Test Description', type: 'Closer'},
    {title: 'Wow another one', description: 'Test Description', type: 'Opener'}];

  });
