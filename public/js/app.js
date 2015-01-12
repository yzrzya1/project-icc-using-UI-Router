

var routerApp = angular.module('routerApp',['ui.router','dashboardApp']);
	routerApp.filter('slice', function() {
	  return function(arr, start, end) {
	    return arr.slice(start, end);
	  };
	});

routerApp.config(
	
	function($stateProvider,$urlRouterProvider){

	//$urlRouterProvider.otherwise('/dashboard');

	$stateProvider
		/*
		.state('dashboard',{
			url: '/dashboard',
			templateUrl: 'dashboard.html',
			controller: function($scope){
				$scope.message='ng-work';
			}
		})
		*/
		.state('hcc',{
			url: '/hcc',
			templateUrl: 'hcc.html',
			controller: function($scope){
				$scope.message='ng-work';
			}
		})
		.state('trends',{
			url: '/trends',
			templateUrl: 'trends.html',
			controller: function($scope){
				$scope.message='ng-work';
			}
		})
		.state('its',{
			url: '/its',
			templateUrl: 'its.html',
			controller: function($scope,$http){
				$scope.message='ng-work';

				$scope.its = [];
			  	for (var i = 0; i < 5; i++) $scope.its.push(i);
				$http.get('/api/its')
					.success(function(data){
						$scope.its=data;
					})
					.error(function(data){
						console.log('Error:' + data);
					});
						}
					});
});
