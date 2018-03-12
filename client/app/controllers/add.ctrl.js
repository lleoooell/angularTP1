
angular.module('moduletest').controller("add.eleve",['$scope','$stateParams','eleveFactory','$state', function($scope,$stateParams,eleveFactory,$state){
		
	// $scope.eleve = eleveFactory.get({userId : $stateParams.id});
	$scope.eleve = new eleveFactory;
	$scope.update = function(eleve){
		console.log(eleve);
		eleve.$update().then(function(success){
			console.log('success edition');
			$state.go('eleves');
		},function(error){
			console.log('error edition');

		});
	}
}]);