app.controller('chooseCaseController',['$scope','$http','gameService','$location',function($scope,$http,gameService,$location) {
	

	$scope.playerName=gameService.playerName;
	 $scope.i=0;
     $http.get("assets/data/data.json")
    .then(function(response) {
        $scope.myWel = response.data;
        console.log($scope.myWel);
        console.log("progrsam running");
        },function myError(response) {
    	console.log("sorry");
        $scope.myWel = "Sorry";
    });
   
	var initial=function(){
		/*while refreshing goes to home*/
		if(gameService.playerName=="")
		{
			$location.path('/');
		}

	}
	$scope.lock=function(){
		if($scope.i<=9){
		console.log($scope.i+"jbjhbhb");
		$scope.i=$scope.i+1;
	}else{
		$scope.i=9;
	}
	}
initial();

}])