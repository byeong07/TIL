# AngularJS

## Directives

- [코드카데미](https://www.codecademy.com) Lesson 2. Directives
- [결과물 바로가기](https://sharryhong.github.io/TIL/angularjs/02_directives)
- 중요! 해석이 틀릴 수 있으니 조심 ^^ 

### 1_ directives 1

##### index.html 코드 리펙토링 전 

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

- we made a new *directive*. We used `app.directive` to create a new directive named `'appInfo'`. <br> 
It returns an object with three options.<br><br>
app.directive으로 이름이 appInfo인 새 디렉티브를 만들었다. <br>
이는 다음 3 옵션을 가진 객체를 반환한다. 

1. `restrict` specifies how the directive will be used in the view.<br> The `'E'` means it will be used as a new HTML element.<br><br>
restrict는 어떻게 디렉티브가 view에서 사용될지 명시한다. <br>
'E'는 html의 새 요소처럼 사용될 것이라는 의미이다. 

1. scope specifies that we will pass information into this directive through an attribute named info.<br> The `=` tells the directive to look for an attribute named info in the `<app-info>` element, like this:<br>
The data in `info` becomes available to use in the template given by `templateURL`.<br><br>
scope는 info속성을 통해 이 디렉티브에서 정보를 통과하도록 명시한다. <br> = 는 디렉티브가 `<app-info>` 요소 내에서 info 속성을 찾는 것을 말한다. 
info안의 데이터는 templateURL에 주어진 템플릿에서 사용되기 위해 이용가능하게 된다.

1. `templateUrl` specifies the HTML to use in order to display the data in `scope.info`. Here we use the HTML in `js/directives/appInfo.html`.<br><br>
templateUrl은 scope.info의 데이터가 순서대로 보이도록 한다. <br>


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

- Then in index.html we use the new directive as the HTML element `<app-info>`. We pass in objects from the controller's scope into the `<app-info>` element's `info` attribute so that it displays.<br><br>
새 디렉티브를 사용해서 `<app-info>` html 요소를 사용하였다. <br>
app-info 요소의 info 속성으로 컨트롤러의 스코프로 부터 객체를 pass해 display한다. 

