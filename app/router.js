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
		.when('/congratulationCase',{
			templateUrl : 'partials/congratulationCase.html',
			controller  : 'congratulationCaseController'
		})
		
		.otherwise({
			redirectTo : '/',
			controller  : 'enterNameController'
		})
}]);