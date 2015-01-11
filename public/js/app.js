

var routerApp = angular.module('routerApp',['ui.router']);

routerApp.config(function($stateProvider,$urlRouterProvider){

	$urlRouterProvider.otherwise('/home');

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
		});
});

