angular.module('moduletest').controller("ProfilCtrl",['$scope','$stateParams','eleveFactory', function($scope,$stateParams,eleveFactory){
	$scope.test = 'this is test';
	console.log($stateParams);
	$scope.eleve = eleveFactory.get({userId : $stateParams.id});

}]);