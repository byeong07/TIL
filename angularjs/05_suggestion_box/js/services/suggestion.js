app.factory('suggestions', [function(){
	var demoSuggestions = {
		posts: [
			{
				title: 'Full-Stack Developer', 
				upvotes: 15, 
				comment: [],
			},
			{
				title: 'AngularJS and Firebase', 
				upvotes: 8, 
				comment: [],
			},
			{
				title: 'Front-End Developer', 
				upvotes: 12, 
				comment: [],
			},
		]
	};
	return demoSuggestions;
}]);