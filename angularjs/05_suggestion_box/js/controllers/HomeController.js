app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function(){
		// nothing in input text
		if( !$scope.title || $scope.title === "" ){
			return;
		}
		$scope.posts.push({
			title: $scope.title,
			upvotes: 0,
		});
		// after submit, clear input text
		$scope.title = '';
	};

	$scope.upVote = function(post){
		post.upvotes += 1; 
	};
}]);