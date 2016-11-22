// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('mytodos', ['ionic'])

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('list', {
    url: '/list',
    templateUrl: 'template/list.html'
  });

  // :todoId  id값 받아오게 추가
  $stateProvider.state('edit', {
    url: '/edit/:todoId',
    templateUrl: 'template/edit.html'
  });
  // 기본적으로 ... #/list로 들어가게 세팅 
  $urlRouterProvider.otherwise('/list');
})

.controller('ListCtrl', function($scope){
  $scope.todos = todos;
})

.controller('EditCtrl', function($scope, $state){
  // 앞에서 받아온 index저장
  $scope.todo = getTodo($state.params.todoId);
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
