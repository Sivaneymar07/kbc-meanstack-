app.controller('enterNameController',['$scope','gameService','$location',function($scope,gameService,$location) {
	$scope.playerName="";
	gameService.playerName=""; //to refresh player name so that prevent navigation to pages using older player name
	$scope.showError=false;

	var pattern=/^[a-zA-Z ]{2,}$/;

	$scope.play=function(){
		var nameValidationResult=validatePlayerName($scope.playerName);
		if(nameValidationResult=="valid")
		{
			$location.path('/chooseCase');
		}
		else
		{
			$scope.playerName="";
			$scope.showError=true;
		}
	};
	var validatePlayerName=function(name)
	{
		if(!pattern.test(name))
		{
			return "invalid";
		}
		else
		{
			gameService.playerName=name.toLowerCase();
			return "valid";

		}
	}
}])