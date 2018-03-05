angular.module('moduletest').factory('currServ',[function(){
	return {
		eurToDoll : function(eur){
   			
   			var rate = 1.23;

			return eur * rate;

		},
		getListe : function(dol){
   			
   			var rate = 0.77;

			return dol * rate;

		}
	}
}]);