


angular.module("moduletest").controller('ctrl.devise', ['$scope','$http','$rootScope','currServ','eleveFactory',function($scope,$http,$rootScope,currServ,eleveFactory) {

    $scope.convertirDevises = function(amount){
   		console.log(amount + '€');
   		$scope.amountDollar = currServ.eurToDoll(amount);
   		console.log($scope.amountDollar + '$');
   	};



   	

}]);