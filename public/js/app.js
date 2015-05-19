window.app = angular.module('myApp', ['ngRoute']); 

app.controller('mainController', function($scope){
	console.log('mainController init');
});

app.controller('DashboardCtrl', function($scope){
	$scope.dashboard = 'hello Dashboard'; 
})
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/dashboard', {
         templateUrl: 'partials/dashboard.html',
         controller: 'DashboardCtrl'
      }).
      when('/phones/:phoneId', {
        // templateUrl: 'partials/phone-detail.html',
        // controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);

console.log('app.js init');