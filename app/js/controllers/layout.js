var homeControllerModule = angular.module('homeControllerModule', []);

homeControllerModule.controller('homeController', ['$scope', '$http', 'apiService', function($scope, $http, apiService) {
  $scope.hello = "Hi";
}]);
