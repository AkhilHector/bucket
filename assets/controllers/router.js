angular.module('bucket',
  [
    'ui.router',
    'ui.bootstrap',
    'LocalStorageModule'
  ])

.config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
  function ($locationProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider.state('home', {
      url: '/',
      templateUrl: '/templates/home.html'
    })

    .state('links', {
      url: '/links',
      templateUrl: '/templates/links.html'
    })

    $urlRouterProvider.otherwise('/')
  }])
