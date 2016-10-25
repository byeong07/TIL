app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){
	$scope.posts = suggestions.posts;

	$scope.addSuggestion = function(){
		// input에 아무것도 안넣을 때 submit을 하지 않는다.
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