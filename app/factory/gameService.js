app.factory('gameService',['$http',function($http){


var gameService={};
gameService.playerName="";
gameService.gameStarted=false;


gameService.getAmount=function()
{
	return $http.get("assets/data/data.json");

}

return gameService;
}])