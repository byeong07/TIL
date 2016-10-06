# AngularJS

## 앵귤러로 간단한 application 만드는 순서 
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

3. Create a new controller : 이름이 MainController인 컨트롤러를 만든다.

- MainController.js 

	```
	app.controller('MainController', ['$scope', function($scope) {
	  $scope.title = 'Exercise Log'
	  $scope.exercises = [
	    {
	      icon: 'img/pushup.jpg',
	      name: 'Pushups',
	      count: 20
	    },
	    ...
	```

4. view에서 컨트롤러 attach

- index.html

	```
	<div class="main" ng-controller="MainController">
	```

5. Display the data in the view

- index.html 

#### 표현식(expression)
- 표현식은 페이지에 값을 나타내기 위해 사용된다.

	```
	<h1> {{ title }} </h1> 
	```

#### Filters
- [filter date에 대하여 더 알아보기](http://www.ng-newsletter.com/posts/beginner2expert-config.html)

> `{{ program.datetime | date }}` : 기본형 `Oct 6, 2016`

> `{{ program.datetime | date:'EEEE' }}` : 요일 `Thursday`

> `{{ program.datetime | date:'shortTime' }}` : 시간 `2:26 PM`


6. 그 외  

- `+ -` 버튼을 누르면 count 숫자 `+ -` 되게 하기 

- MainController.js 에 메소드 추가 

	```
	$scope.increase = function(index) {
	  $scope.exercises[index].count += 1;
	};

	$scope.decrease = function(index) {
	  $scope.exercises[index].count -= 1;
	};
	```

- index.html 에서 `ng-click` 디렉티브로 클릭시 컨트롤러에 추가한 메소드 실행하기 

	```
	<span class="decrease" ng-click="decrease($index)">-</span><span class="count"> {{ exercise.count }} </span><span class="increase" ng-click="increase($index)">+</span>
	```