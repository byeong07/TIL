(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHJlcXVpcmUoJ2FuZ3VsYXInKTtcclxuLy8gcmVxdWlyZSgnYW5ndWxhci1yb3V0ZScpO1xyXG4vLyByZXF1aXJlKCdhbmd1bGFyLWFuaW1hdGUnKTtcclxuLy8gcmVxdWlyZSgnLi9jb250cm9sbGVycy9Ib21lQ29udHJvbGxlcicpO1xyXG4vLyByZXF1aXJlKCcuL2NvbnRyb2xsZXJzL1N1Z2dlc3Rpb25Db250cm9sbGVyJyk7XHJcbi8vIHJlcXVpcmUoJy4vc2VydmljZXMvc3VnZ2VzdGlvbicpO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdTdWdnZXN0aW9uQm94JywgWyduZ1JvdXRlJ10pO1xyXG5cclxuYXBwLmNvbmZpZyhmdW5jdGlvbigkcm91dGVQcm92aWRlcil7XHJcblx0JHJvdXRlUHJvdmlkZXJcclxuXHQud2hlbignLycsIHtcclxuXHRcdGNvbnRyb2xsZXI6IFwiSG9tZUNvbnRyb2xsZXJcIixcclxuXHRcdHRlbXBsYXRlVXJsOiBcInZpZXdzL2hvbWUuaHRtbFwiXHJcblx0fSlcclxuXHQud2hlbignL3N1Z2dlc3Rpb24vOmlkJywge1xyXG5cdFx0Y29udHJvbGxlcjogXCJTdWdnZXN0aW9uQ29udHJvbGxlclwiLFxyXG5cdFx0dGVtcGxhdGVVcmw6IFwidmlld3Mvc3VnZ2VzdGlvbi5odG1sXCJcclxuXHR9KTtcclxuXHJcbn0pOyJdfQ==