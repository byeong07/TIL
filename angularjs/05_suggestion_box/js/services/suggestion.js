// app.factory('suggestions', [function(){
// 	var demoSuggestions = {
// 		posts: [
// 			{
// 				title: 'Full-Stack Developer', 
// 				upvotes: 11, 
// 				comments: [
// 					{
// 						body: 'good1-1',
// 						upvotes: 1
// 					},
// 					{
// 						body: 'good2-1',
// 						upvotes: 3					
// 					},
// 				]
// 			},
// 			{
// 				title: 'AngularJS and Firebase', 
// 				upvotes: 8, 
// 				comments: [
// 					{
// 						body: 'good2',
// 						upvotes: 2
// 					}
// 				]
// 			},
// 			{
// 				title: 'Front-End Developer', 
// 				upvotes: 12, 
// 				comments: []
// 			},
// 		]
// 	};
// 	return demoSuggestions;
// }]);

app.factory('suggestions', ['$http', function($http){
    return $http.get('./data/data.json')
        .success(function(data) { 
        console.log("service OK!");
          return data; 
        }) 
        .error(function(err) { 
          console.log("service err!");
          return err; 
        });
}]);