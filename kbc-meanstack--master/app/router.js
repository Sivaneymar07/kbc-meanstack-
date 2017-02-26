app.config(['$routeProvider',function($routeProvider) {

	$routeProvider
		.when('/',{
			templateUrl : 'partials/enterName.html',
			controller  : 'enterNameController',
 		})
		.when('/chooseCase',{
			templateUrl : 'partials/chooseCase.html',
			controller  : 'chooseCaseController'
		})
		
		.otherwise({
			redirectTo : '/',
			controller  : 'enterNameController'
		})
}]);