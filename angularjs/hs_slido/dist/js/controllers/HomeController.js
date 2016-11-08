app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	suggestions.success(function(data){
		console.log("HomeController.js OK!");
		$scope.posts = data.posts;

		$scope.addSuggestion = function(){

			if( !$scope.name || $scope.name === "" ){
				$scope.name = "Anonymous";
			}
			if( !$scope.title || $scope.title === "" ){
				return;
			}
			$scope.posts.push({
				name: $scope.name,
				title: $scope.title,
				upvotes: 0,
				comments: []
			});
			// after submit, clear input text
			$scope.name = '';
			$scope.title = '';
		};

		$scope.upVote = function(post){
			post.upvotes += 1; 
		};
	});

	
	
}]);