app.controller('chooseCaseController',['$scope','$http','gameService','$location',function($scope,$http,gameService,$location) {
	$scope.clicked1= false;
	$scope.clicked2= false;
	$scope.clicked3= false;
	$scope.clicked4= false;
	var count =0;
	if($scope.i==0){
		$scope.activity[i]=true;
	}
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
	$scope.next=function(){
		if($scope.i<9){
		$scope.i=$scope.i+1;
		}else{
		$location.path('/congratulationCase');
		}
	}
	$scope.click1=function(){
		if(count==0)
		{
		$scope.clicked1 = true;
		console.log('asdsad')
		count=1;
		
	}
	}
	$scope.click2=function(){
		if(count==0)
		{	
		$scope.clicked2 = true;
		console.log('asdsad')
			count=1
	}
	}
	$scope.click3=function(){
		if(count==0)
		{	
		$scope.clicked3 = true;
		console.log('asdsad')
					count=1
	}
	}
	$scope.click4=function(){
		if(count==0)
		{		
		$scope.clicked4 = true;
		console.log('asdsad')
					count=1
	}
	}
	$scope.unlock=function() {
		count=0;
		$scope.clicked1=false;
		$scope.clicked2=false;
		$scope.clicked3=false;
		$scope.clicked4=false;
	}
	$scope.ans=function(a) {

		$scope.userans=a;

		console.log($scope.userans);
		console.log($scope.myWel[$scope.i].Answer);

	}
	$scope.lock=function(){
		if($scope.userans==$scope.myWel[$scope.i].Answer){
			$scope.i=$scope.i+1;
			count=0;
			$scope.clicked1= false;
			$scope.clicked2= false;
			$scope.clicked3= false;
			$scope.clicked4= false;
		}else{
			
		}
	}
	// {
	// 	$scope.status="active";
	// 	if($scope.status==$scope.Answer) {
	// 		$scope.click1=false;
	// 	}
	// }
	
 initial();

}])