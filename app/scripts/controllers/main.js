'use strict';

/**
 * @ngdoc function
 * @name angularMagicDbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularMagicDbApp
 */
app.controller('MainCtrl', function ($scope) {

  $scope.tricks = [
    {title: 'Card Trick', type: 'Other' }
  ];

  $scope.trick = { title: '', type: '' };

  $scope.addTrick = function () {
    $scope.tricks.push({ title: $scope.trickTitle, type: $scope.trickType });
    $scope.trick = { title: '', type: '' };
  };

});
