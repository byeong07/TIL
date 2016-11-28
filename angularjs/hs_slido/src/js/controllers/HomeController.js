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
				num: $scope.posts.length, // orderBy시 순서잡기위함 
				name: $scope.name,
				title: $scope.title,
				upvotes: 0,
				comments: []
			});
			// after submit, clear input text
			$scope.name = '';
			$scope.title = '';
		};

		// 좋아요 버튼 눌렀을 때
		$scope.upVote = function(post){
			post.upvotes += 1; 
		};

		// item 매개변수에 따라 orderBy
		$scope.sort = function(item) {
			// 나중에 date넣을 것 대비 
		// if ( $scope.orderProp == 'date') {
		// 	return new Date(item.date);
		// }
			// sort 메소드 실행시 orderProp값 반환 
			return item[$scope.orderProp];
		}
		// 기본 orderBy 값 upvotes
		$scope.orderProp='upvotes';
		// 메뉴 클릭시 orderBy될 값 정하기
		$scope.tab = function(tabIndex) {
			if (tabIndex == 1){
				$scope.addClass(tabIndex);
				$scope.orderProp='upvotes';
			}
			if (tabIndex == 2){
				$scope.addClass(tabIndex);
				$scope.orderProp = 'num';
			}
		};
		// 메뉴 클릭시 class='on'붙이기
		$scope.addClass = function(index){
			$scope.orderMenuList = document.querySelectorAll('.order-menu li');
			if($scope.orderMenuList[index-1].classList.contains("on")){
				return;
			} else {
				for(i=0, j=$scope.orderMenuList.length; i<j; i++){
					$scope.orderMenuList[i].classList.remove("on");
				}
				$scope.orderMenuList[index-1].classList.add("on");
			}
		};
	});

}]);