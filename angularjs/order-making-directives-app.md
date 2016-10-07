# AngularJS

## Custom Directives로 간단한 application 만들기 
codecademy PRO를 하면서 핵심 내용 정리하기 

1. Create a new module : 새 모듈을 만든다. 

 - app.js

	```
	var app = angular.module('MyApp', []);
	```

2. view에서 모듈 attach

 - index.html : 만든 모듈은 body내에서 범위(scope)

	```
	<body ng-app="MyApp">
	```

3. Create a new controller : 이름이 ScoreController인 컨트롤러를 만든다.

 - controllers/ScoreController.js 

	```
	app.controller('ScoreController', ['$scope', function($scope) {
	  $scope.scores = [
	    {
	      datetime: 1420848000000,
	      visitor_team: {
	        city: "Charlotte",
	        name: "Hornets"
	      },
	      home_team: {
	        city: "New York",
	        name: "Knicks"
	      },
	      period: "Final",
	      visitor_score: 110,
	      home_score: 82
	    },
	    ...
	```

4. view에서 컨트롤러 attach

 - index.html

	```
	<div class="main" ng-controller="ScoreController">
	```

5. create a new directive 

 - js/directives/game.js

 ```
	 app.directive('game', function(){ // 이름이 game인 디렉티브 
	  return {
	    restrict: 'E', // html 요소로 사용할 것이다.
	    scope: {
	      info: '=', // 속성명 info
	    },
	    templateUrl: 'js/directives/game.html' // 템플릿 파일
	  };
	});
 ```

6. 템플릿 

 - js/directives/game.html에 추가할 코드 코딩 예

 ```
 <h2 class="visitor-score"> {{ info.visitor_score }} </h2>
 ```

7. view에서 만든 디렉티브로 코드 looping 

 - index.html

 ```
 <game info="score" ng-repeat="score in scores"></game>
 ```

### 참고 자료 

- [Creating Custom Directives](https://docs.angularjs.org/guide/directive)