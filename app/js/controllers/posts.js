var postsControllerModule = angular.module('postsControllerModule', []);

postsControllerModule.controller('postsController', ['$scope', '$http', function($scope, $http) {
  $scope.name = "Posts Controller"
  $http.get('http://localhost:3000/posts').success(function(data) {
    $scope.posts = data;
  });
}]);

postsControllerModule.controller('newPostController', ['$scope', '$http', function($scope, $http) {
  $scope.newName = "new posts controller"
}]);
