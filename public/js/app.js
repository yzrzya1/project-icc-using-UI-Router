

var routerApp = angular.module('routerApp',['ui.router']);
	routerApp.filter('slice', function() {
	  return function(arr, start, end) {
	    return arr.slice(start, end);
	  };
	});

routerApp.config(
	
	function($stateProvider,$urlRouterProvider){

	//$urlRouterProvider.otherwise('/home');

	$stateProvider


		.state('home',{
			url: '/home',
			templateUrl: 'vertical-nav.html'
		})
		.state('home.dashboard',{
			url: '/dashboard',
			templateUrl: 'dashboard.html',
			controller: function($scope){
				$scope.message='ng-work';
			}
		})
		.state('home.its',{
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

/*
var home = {
	abstract:true,
	name:'parent',
	url:'/home',
	templateUrl: 'vertical-nav.html',
	controller:function($scope){
		$scope.contacts = [{id:0,name:'code_bunny'},{id:1,name:'white_bunny'},{id:2,name:'black_bunny'}]
	}
};
var dashboard = {
	name:"parent.child",
	url: '/dashboard',
	templateUrl: 'dashboard.html',
	parent:home
};
var detail = {
	name:"parent.detail",
	url:'/detail:id',
	templateUrl: 'detail.html',
	parent:home,
	controller:function($scope,$stateParams){
		$scope.id=$stateParams.id
	}
};

routerApp.config(function($locationProvider,$stateProvider){
	//$locationProvider.html5Mode({enabled:true}).hashPrefix('!');
	$stateProvider.state(home).state(dashboard).state(detail);
});

*/