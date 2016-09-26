# AngularJS

### first-app

- [코드카데미](https://www.codecademy.com) Lesson 1. Your First App 공부 후 github에 정리하기
- [결과물 바로가기](https://sharryhong.github.io/TIL/angularjs/first-app)
- 중요! 해석이 틀릴 수 있으니 조심 ^^ 제 영어는 7년전에 머물러있습니다.. ㅋㅋ 

#### 1, 2_Hello AngularJS

##### 1) js/app.js 파일 

```
var app = angular.module("myApp", []); 
```
- created a new module name myApp. <br>
새 모듈(이름이 myApp인)을 만든다. <br>

- **A module contains the different components of an AngularJS app.**<br>
모듈은 앵귤러앱의 서로다른 구성요소를 담고있다. 


##### 2) index.html 파일

```
<body ng-app="myApp>
...
<!-- Modules -->
<script src="js/app.js"></script>

<!-- Controllers -->
<script src="js/controllers/MainController.js"></script>
```
- The `ng-app` is called a *directive*. <br>
`ng-app`은 디렉티브(지시자)라 부른다.  <br>

- It tells AngularJS that the `myApp` module will live within the `<body>` element, termed the application's *scope*. <br>
위 코드의 경우 `myApp` 모듈은 `<body>`요소내에서 유지되고, 애플리케이션의 스코프(범위)이다. <br>

- In other words, **we used the `ng-app` directive to define the application scope.** <br>
다시 말해, `ng-app` 디렉티브는 애플리케이션 스코프를 정의하기 위해 사용한다. 

##### 3) js/controllers/MainController.js 파일 

```
app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Top Sellers in Books';
}]);
```

- we created a new *controller*. named `MainController`. <br>
**A controller manages the app's data**. <br>
Here we use the property title to store a string, and attach it to `$scope`.<br>
이름이 MainController인 컨트롤러를 만들었다. <br>
컨트롤러는 앱의 데이터를 관리한다. <br>
여기서는 스트링(문자)를 저장하는 프로퍼티명 title을 사용하고, `$scope`에 첨부한다. 

##### 4) index.html 파일

```
<div class="main" ng-controller="MainController">
  <div class="container">
    <h1> {{ title }} </h1> // expression
```

- Like `ng-app`, `ng-controller` is a *directive* that **defines the controller scope**. <br>
This means that properties attached to `$scope` in `MainController` become available to use within `<div class="main">`.<br>
ng-controller도 컨트롤러 스코프를 정의하는 디렉티브이다.  <br>
이는 `MainController`가 `<div class="main">` 내에서 유효하다는 것을 말한다. 프로퍼티는 `$scope`에 첨부된다. 

- Inside `<div class="main">` we accessed `$scope.title` using `{{ title }}`. <br>
This is called an *expression*. **Expressions are used to display values on the page**. <br>
`{{ title }}`을 expression(표현식)이라 부른다. 표현식은 페이지에 값을 나타내기 위해 사용된다. 

- Both the controller `MainController` and the view `index.html` have access to `$scope`. <br>
This means we can use `$scope` to communicate between the controller and the view.
컨트롤러(MainController)와 뷰(index.html)는 둘 다 `$scope`로 접근된다. <br>
이것은 컨트롤러와 뷰간 커뮤니케이트할 때 `$scope`를 사용할 수 있다는 것을 의미한다. 