angular.module('myApp', ['ngRoute', 'myApp.controllers'])

  .config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {

    $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
       });

      $routeProvider
        .when('/', {
          templateUrl : 'views/landing.html'
        })
        .when('/moreInfo', {
          templateUrl : 'views/moreInfo.html'
          // controller : 'BooksController'
        })
        .when('/benefits', {
          templateUrl : 'views/benefits.html'
          // controller : 'BooksController'
        })
        .when('/siteMap', {
          templateUrl : 'views/siteMap.html',
          controller : 'MapCtrl'
        })
        .when('/feedback', {
          templateUrl : 'views/feedback.html'
          // controller : 'OtherController'
        })
        .otherwise({
          template : '404 not found'
        });


  }]);