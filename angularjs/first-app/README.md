# AngularJS

### first-app

- [코드카데미](https://www.codecademy.com) Lesson 1. Your First App 공부 후 github에 정리하기
- [결과물 바로가기](https://sharryhong.github.io/TIL/angularjs/first-app)
- 중요! 해석이 틀릴 수 있으니 조심 ^^ 제 영어는 7년전에 머물러있습니다.. ㅋㅋ 

#### 1, 2_Hello AngularJS

##### js/app.js 파일 

```
var app = angular.module("myApp", []); 
```
- created a new module name myApp. <br>
새 모듈(이름이 myApp인)을 만든다. 

- A module contains the different components of an AngularJS app.<br>
모듈은 앵귤러앱의 서로다른 구성요소를 담고있다. 


##### index.html 파일

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

It tells AngularJS that the `myApp` module will live within the `<body>` element, termed the application's `scope`. <br>
위 코드의 경우 `myApp` 모듈은 `<body>`요소내에서 유지되고, 애플리케이션의 스코프(범위)이다. <br>

In other words, we used the `ng-app` directive to define the application scope. <br>
다시 말해, `ng-app` 디렉티브는 애플리케이션 스코프를 정의하기 위해 사용한다. 