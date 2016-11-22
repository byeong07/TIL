// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.controller('MovieCtrl', function($scope, $http){
  $scope.movies = [  ];
  // 현재 가져온 data의 마지막 배열 값 
  var lastIdx = 0;
  // 데이터가 있을 경우 
  $scope.moreDataCanBeLoaded = true;
  // 아래로 스크롤할 때. 새로 조회한 데이터 15개를 추가
  $scope.loadMore = function() {
    // 최초실행시에는 적용되지 않아야 한다.
    if($scope.movies.length > 0) {
      lastIdx = $scope.movies[$scope.movies.length - 1].idx;
    }
    
    // 나중에 앱 개발시 서버개발자와 api불러오는 것 상의 
    $http.get('/api/movie/list/' + lastIdx)
    .success(function(response){
      // 더이상 가져올 데이터가 없다면 
      if(response.movieList.length ===0){
        $scope.moreDataCanBeLoaded = false;
      }
      // 실제 데이터 movieList 중 값만 받아오기 위해 forEach
      angular.forEach(response.movieList, function(data){
        $scope.movies.push(data);
      });
      // 데이터를 불러왔으면 아래 코드가 있어야 무한스크롤에 빠지지 않는다.
      $scope.$broadcast('scroll.infiniteScrollComplete');
    });
  };
  

  

  // 위로 당길 때. 새로 가져온 데이터로 리플래쉬 
  $scope.loadNew = function() {

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
