app.controller('chooseCaseController',['$scope','gameService','$location',function($scope,gameService,$location) {
	

	$scope.playerName=gameService.playerName;
// //     app.controller('myCtrl', function($scope, $http) {
//     $http.get("welcome.htm")
//     .then(function(response) {
//         $scope.myWelcome = response.data;
//     });
// });
	
	var initial=function(){

		/*on pressing back in game page it goes to home*/
		if(gameService.gameStarted==true)
		{
			$location.path('/');
		}

		/*while refreshing goes to home*/
		if(gameService.playerName=="")
		{
			$location.path('/');
		}

	}

initial();

}])