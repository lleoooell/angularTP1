angular.module('moduletest').config(function($stateProvider,$urlRouterProvider,$locationProvider) {

  $stateProvider.state({
    name: 'eleves',
    url: '/',
    templateUrl: 'app/templates/home.html',
    controller  : 'ctrl1'
  });

  $stateProvider.state({
    name: 'profil',
    url: '/eleve/:id',
    templateUrl: 'app/templates/profil.html',
    controller  : 'ProfilCtrl'
  });

  $stateProvider.state({
    name: 'about',
    url: '/about',
    templateUrl: 'app/templates/about.html'
  });
  $stateProvider.state({
    name: 'articles',
    url: '/articles/:id',
    templateUrl: 'app/templates/about.html'

  });
  $stateProvider.state({
    name: 'currency',
    url: '/currency',
    templateUrl: 'app/templates/currency.html',
    controller : 'ctrl1'

  });

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);

});
