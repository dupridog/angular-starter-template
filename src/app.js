window.app = angular.module('myApp', ['ngRoute']); 

app.controller('mainController', ['$scope', function($scope){
	console.log('mainController init');
}]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
         templateUrl: 'dashboard/dashboard.html',
         controller: 'DashboardCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);

console.log('app.js init');