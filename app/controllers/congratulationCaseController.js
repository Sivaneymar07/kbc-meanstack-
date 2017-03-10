app.controller('congratulationCaseController',['$scope','gameService','$location',function($scope,gameService,$location) {
	

	$scope.playerName=gameService.playerName;
	
	console.log($scope.playerName)
	$scope.playAgain=function(){
		$location.path('/');
	}
	
}]);