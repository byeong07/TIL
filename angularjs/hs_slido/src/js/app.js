// require('angular');
// require('angular-route');
// require('angular-animate');
// require('./controllers/HomeController');
// require('./controllers/SuggestionController');
// require('./services/suggestion');

var app = angular.module('SuggestionBox', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		controller: "HomeController",
		templateUrl: "views/home.html"
	})
	.when('/suggestion/:id', {
		controller: "SuggestionController",
		templateUrl: "views/suggestion.html"
	});

});