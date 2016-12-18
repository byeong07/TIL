(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ1N1Z2dlc3Rpb25Cb3gnLCBbJ25nUm91dGUnXSk7XHJcblxyXG5hcHAuY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKXtcclxuXHQkcm91dGVQcm92aWRlclxyXG5cdC53aGVuKCcvJywge1xyXG5cdFx0Y29udHJvbGxlcjogXCJIb21lQ29udHJvbGxlclwiLFxyXG5cdFx0dGVtcGxhdGVVcmw6IFwidmlld3MvaG9tZS5odG1sXCJcclxuXHR9KVxyXG5cdC53aGVuKCcvc3VnZ2VzdGlvbi86aWQnLCB7XHJcblx0XHRjb250cm9sbGVyOiBcIlN1Z2dlc3Rpb25Db250cm9sbGVyXCIsXHJcblx0XHR0ZW1wbGF0ZVVybDogXCJ2aWV3cy9zdWdnZXN0aW9uLmh0bWxcIlxyXG5cdH0pO1xyXG5cclxufSk7Il19