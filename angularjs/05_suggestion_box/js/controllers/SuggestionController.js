app.controller('SuggestionController', ['$scope', 'suggestions', '$routeParams', function($scope, suggestions, $routeParams){
	// var post = the ID of the current post.
	$scope.post = suggestions.posts[$routeParams.id];

	$scope.addComment = function(){
		if( !$scope.commentinput || $scope.commentinput === "" ){
			return;
		}
		$scope.post.comments.push({
			body: $scope.commentinput,
			upvotes: 0,
		});
		console.log($scope.commentinput);
		// after submit, clear input text
		$scope.commentinput = '';
	};

	$scope.upVote = function(ct){
		ct.upvotes += 1;
	};
}]);