# AngularJS

## Directives

- [코드카데미](https://www.codecademy.com) Lesson 2. Directives
- [결과물 바로가기](https://sharryhong.github.io/TIL/angularjs/02_directives)
- 중요! 해석이 틀릴 수 있으니 조심 ^^ 

### 1_ directives 1

```
<div class="main" ng-controller="MainController">
  <div class="container">
     <div class="card">
      <img class="icon" ng-src="{{ move.icon }}">
      <h2 class="title">{{ move.title }}</h2>
      <p class="developer">{{ move.developer }}</p>
      <p class="price">{{ move.price | currency }}</p>
    </div>

    <div class="card">
      <img class="icon" ng-src="{{ shutterbugg.icon }}">
      <h2 class="title">{{ shutterbugg.title }}</h2>
      <p class="developer">{{ shutterbugg.developer }}</p>
      <p class="price">{{ shutterbugg.price | currency }}</p>
    </div>

    <div class="card">
      <img class="icon" ng-src="{{ gameboard.icon }}">
      <h2 class="title">{{ gameboard.title }}</h2>
      <p class="developer">{{ gameboard.developer }}</p>
      <p class="price">{{ gameboard.price | currency }}</p>
```

- looking at the view, the same code is written over and over again to display each app. This is repetitive and error-prone. Let's fix this.<br><br>
위처럼 view를 구현할 경우, 쓸데없이 반복적이고, 에러를 유발할 수 있다. 
고쳐보기! 

##### js/directives/appInfo.js 

```
app.directive('appInfo', function(){
  return {
    restrict: 'E',
    scope: {
      info: '='
    },
    templateUrl: 'js/directives/appInfo.html'
  };
});
```

##### js/directives/appInfo.html

```
<img class="icon" ng-src="{{ info.icon }}"> 
<h2 class="title">{{ info.title }}</h2> 
<p class="developer">{{ info.developer }}</p> 
<p class="price">{{ info.price | currency }}</p>
```

##### index.html 수정하기 

```
<div class="card">
  <app-info info="move"></app-info>
</div>

<div class="card">
  <app-info info="shutterbugg"></app-info>
</div>

<div class="card">
  <app-info info="gameboard"></app-info>
</div>
```