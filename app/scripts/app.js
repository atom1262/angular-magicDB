'use strict';

/**
 * @ngdoc overview
 * @name angularMagicDbApp
 * @description
 * # angularMagicDbApp
 *
 * Main module of the application.
 */
angular
  .module('angularMagicDbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/tricks', {
        templateUrl: 'views/tricks.html',
        controller: 'TricksCtrl'
      })
      .when('/posts', {
        templateUrl: 'views/posts.html',
        controller: 'PostsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
