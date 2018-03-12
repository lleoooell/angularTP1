angular.module("moduletest").controller('home.ctrl', ['$scope', '$http', '$rootScope', 'currServ', 'eleveFactory', function($scope, $http, $rootScope, currServ, eleveFactory) {

    eleveFactory.query().$promise.then(function(success) {
        console.log(success);
        $scope.maliste = success;
    }, function(err) {
        console.log(err);
    });

    $scope.deleteEleve = function(eleve) {
        console.log(eleve);
        eleve.$delete().then(function(success) {
            console.log(success);
        }, function(err) {
            console.log(err);
        });
    }




}]);