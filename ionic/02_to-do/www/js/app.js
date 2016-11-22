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

  // 신규등록하기 : edit.html화면과 구성이 같으므로 쓴다.
  $stateProvider.state('add', {
    url: '/add',
    templateUrl: 'template/edit.html',
    controller: 'AddCtrl'
  });

  // :todoId  id값 받아오게 추가
  $stateProvider.state('edit', {
    url: '/edit/:todoId',
    templateUrl: 'template/edit.html',
    controller: 'EditCtrl'
  });
  // 기본적으로 ... #/list로 들어가게 세팅 
  $urlRouterProvider.otherwise('/list');
})

// todo list관련 컨트롤러
.controller('ListCtrl', function($scope){
  $scope.todos = todos;
  $scope.reorder = false;

  $scope.remove = function(todoId){
    remove(todoId);
  };

  $scope.move = function(todo, fromIndex, toIndex) {
    move(todo, fromIndex, toIndex);
  };

  $scope.toggleReorder = function() {
    $scope.reorder = !$scope.reorder;
  };
})

// add todo 관련 컨트롤러
.controller('AddCtrl', function($scope, $state){
  // 기존 값 초기화하기
  $scope.todo = {
    id: new Date().getTime().toString(),
    title: '',
    description: '',
    complete: false
  };

  // 저장버튼 눌렀을 때 
  $scope.save = function() {
    createTodo($scope.todo);
    $state.go('list'); // 해당 화면으로 이동하기
  };
})

// todo 상세페이지 - 할일 입력 관련 컨트롤러 
.controller('EditCtrl', function($scope, $state){
  // 앞에서 받아온 index저장
  // 우선 데이터바인딩이 무조건되지 않게하기 위해 copy한다.(저장버튼이 눌렸을때만 반영되게 하기위해)
  $scope.todo = angular.copy(getTodo($state.params.todoId));

  // 저장버튼 눌렀을 때 
  $scope.save = function() {
    updateTodo($scope.todo);
    $state.go('list'); // 해당 화면으로 이동하기
  };
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
