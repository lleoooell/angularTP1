
angular.module("moduletest").controller('ctrl1', ['$scope','$http','$rootScope','currServ','eleveFactory',function($scope,$http,$rootScope,currServ,eleveFactory) {

    // $scope.variable = {
    // 	nom : 'leo',
    // 	prenom : 'casagradne'
    // };
    // $scope.amount = 10;
    // $scope.submit = function(){
    // 	console.log('je viens de submit');
    // 	console.log($scope.variable);
    // };

   	$scope.date = new Date();
   	$http.get("/api/liste").then(function(response){
    	console.log(response.data);
    	$scope.maliste = response.data;
    });
    $scope.maliste = eleveFactory.query();
    console.log(eleveFactory.query());
   	$scope.convertirDevises = function(amount){
   		console.log(amount + '€');
   		$scope.amountDollar = currServ.eurToDoll(amount);
   		console.log($scope.amountDollar + '$');
   	};


   	

}]);