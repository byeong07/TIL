app.controller('HomeController', ['$scope', 'suggestions', function($scope, suggestions){

	suggestions.success(function(data){
		console.log("HomeController.js OK!");
		$scope.posts = data.posts;

		$scope.addSuggestion = function(){

			// 질문을 적지 않았을 때 
			if( !$scope.title || $scope.title === ""){
				alert("Please write your question.");
				return;
			} 

			// 이름을 적지 않았을 때 기본이름 세팅 
			if( (!$scope.name || $scope.name === "") && ($scope.title || !$scope.title === "") ){
				$scope.name = "Anonymous";
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