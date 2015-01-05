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
      { title: 'The Most Recent Post', body: 'Lorem ipsum...', author: 'J.D. Salinger' },
      { title: 'Another Blog Post', body: 'Lorem ipsum...', author: 'Samuel Clemens' }
    ];

    $scope.addPost = function() {
      $scope.posts.push({ title: $scope.postTitle, body: $scope.postBody, author: $scope.postAuthor });
      $scope.postTitle = '';
      $scope.postBody = '';
      $scope.postAuthor = '';
    };
  });
