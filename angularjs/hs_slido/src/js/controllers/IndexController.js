app.controller('IndexController', ['$scope', 'suggestions', function($scope, suggestions){

	suggestions.success(function(data){
		console.log("IndexController.js OK!");
		$scope.groupName = data.groupName;
		$scope.groupDate = data.groupDate;
	});

}]);