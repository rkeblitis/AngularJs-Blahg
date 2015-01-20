var blahgApp = angular.module('blahgApp', [
'ui.router',
'homeControllerModule',
'postsControllerModule'
]);

blahgApp.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/views/home.html'
    })
    .state('posts', {
      url: '/posts',
      templateUrl: 'app/views/posts.html'
    })
    .state('posts.new', {
      url: '/new-post',
      views: {
        'new': {
          templateUrl: 'app/views/new.html'
        }
      }
    });
  $urlRouterProvider.otherwise('/');
});
