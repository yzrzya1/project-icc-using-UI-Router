var app2 = angular.module('loginApp',[]);

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



function loginController($scope,$http){
	$scope.formData = {};
	var inUname='',
		inUpsd='';

	console.log('2');
	$scope.logininfos=[];

	$scope.auth = function(){
		console.log('call login btn');
		$scope.formData.uname=$("#uname").val();
		$scope.formData.upsd=$("#upsd").val();
		
		$scope.message=$scope.formData;

	$http.post('/api/login/logininfos',$scope.formData)
		.success(function(data){
			console.log($scope.formData);
			window.location.assign(data);
		})
		.error(function(data){
			console.log('Error:' + data);
		});
	};
};