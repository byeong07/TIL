# IONIC Framework을 이용한 하이브리드 앱 개발 
온오프믹스 IONIC 프레임워크 강의 

- <http://ionicframework.com/>
- 아파치의 cordova(폰갭과 같은 기능) + 구글의 angularJS + angular-ui-router _ ionic components/API
- Android, IOS, Windows phone
- 다양한 Native Plugins 

### 모바일 UI프레임워크 특징
- 네이티브와 유사한 애니효과, ui화면 구성 지원
- 반응형 웹 지원, 다양한 해상도 지원
- 대부분 오픈소스

### ionic이외 Framework
- jQuery mobile : 오래되어 관련 레퍼런스 많음. 최근 지원 부실해져 최근 기술 지원이 부족하다. 
- sencha touch : 가장 풍부한 ui, 효과 지원. 유료, 무겁다. 
- ChocolateChip-UI 등

### Ionic Framework 장점 
- IOS, Android 앱 동시 개발
- 네이티브 앱 개발보다 web개발에 익숙
- **단순하고 표준적인 UI**
 - ionic에서 제공하는 컴포넌트가 기존의 웹개발 방식의 스크립트 등과 부딪힐 수 있다. 따라서 ionic에서 제공하는 컴포넌트등을 사용하여 개발자가 구성을 하는 것이 좋다. 단순하게 화면구성, 최대한 ionic에서 제공하는 컴포넌트를 사용하는 것이 좋다. 
- 플랫폼 간 모듈의 공유 
 - 내부적으로 만들어진 모듈이 많을 경우 더 좋다. 
- ionic은 ng-cordova로 지원하는 등 cordova를 이용하는데 다른 프레임워크보다 편리하다. 

### Ionic Framework 단점 및 이슈 
- 안드로이드 4.0~4.3 에서는 느리다. (구형 스마트폰)
- ios에서는 부드러우나 안드로이드에서는 약간 끊기는 듯한 현상이 있다.
- 안드로이드에서는 애뮬레이터가 느려서 실제 폰에서 테스트를 많이한다. 기기가 연결되어있으면 $ ionic run android 

### 개발환경 설치

#### Node.js
- <https://nodejs.org>
- 플랫폼별 LTS 다운로드 

#### IONIC설치 
- $ npm install -g cordova ionic 
- 설치확인 : $ cordova -v, $ ionic -v, $ ionic info

#### Text Editor or IDE
- windows 사용자는 Visual Studio Community(무료 IDE) 추천! (편리)

#### macOS사용자 아래 추가 설치해야함 (iphone ios app 설치시)
- $ sudo npm install -g ios-sim  // ios시뮬레이터 설치 (최신기기들은 아직 이슈가 많다.)
- $ sudo npm install -g -unsafe-perm-true ios-deploy (El Capitan 이상 사용자) // deploy 설치. 디버깅 등 할 수 있음 
- $ ios-sim showdevicetypes // 설치 확인 

### ionic app 생성
- $ ionic start myApp blank (--v2) 	// 빈 앱(myApp) 생성. v2안하면 v1버전 
- $ ionic start myAppTab tabs		// 탭이 들어간 탬플릿(myAppTab) 생성 
- $ ionic start myAppMenu sidemenu

### ionic app 실행 
- $ ionic serve 		// 설치한 폴더에서. 기본브라우저에 해당 앱 실행
- $ ionic serve --lab 	// 안드로이드와 ios에서 어떻게 보이는지 나온다. 기본탭의 경우 ios는 아래, 안드로이드는 위에 나온다.

### ionic app 실행 (ios) : 각 프로젝트 별로 해줘야 한다. 해당 플랫폼에 맞게.. 네이티브 코드 생성해줌 
- $ ionic platform add ios 	// 각 플랫폼에 맞는 것 추가 
- $ ionic build ios			// ios로 빌드 
- $ ionic emulate ios		// 시뮬레이터 (최소 실행시 경고문이 뜬다. 64bit만 지원한다. 실제개발시 경고문 안뜬다.)
	[--target="iPhone-6"][-livereload]

### ionic app 실행 (안드로이드)
- Android SDK 설치
- $ ionic platform add android
- $ ionic build android
- $ ionic emulate android 		// 느리다. ionic box라는 것을 개발하였다. 기존 애뮬레이터보다 속도 향상 

#### ionic box
- vagrant를 이용한 android 개발 

### 명령어 
- plugin 추가 
 - $ ionic plugin add org.apache.cordova.geolocation 
 - 해당 플러그인 이름. 코도바 사이트가면 굉장히 많은 플러그인 제공 (카메라, 터치 등 ) 

- 아이콘과 시작화면(splash screen) 생성하기 
 - $ ionic resources --icon		// 기본 아이콘 제공 
 - $ ionic resources --splash  	// 기본 스플래시 이미지 제공 

### 실습 : Movie List App

- [결과물 바로가기](https://sharryhong.github.io/TIL/)

- REST API를 이용한 영화 개봉작 목록 조회 
 - <http://52.78.168.126:8080/api/movie/list/0> // 끝 숫자 : index값 이후의 값 15번씩 던져주는 api
 - JSON파일 형태 

#### $ionic start my-movies blank : 빈 앱 생성하기. 이름은 my-movies

#### 설치된 폴더에서 www > index.html, app.js 에서 작업 

- 변경시 자동 변경 확인 
- app.js에 컨트롤러 추가 (테스트)
```
.controller('MovieCtrl', function($scope){
  $scope.movies = [
    {
      title: '괴물'
    },
    {
      title: '아가씨'
    },
    {
      title: '호빗'
    }
  ];
})
```

- html
```
<body ng-app="starter" ng-controller="MovieCtrl">

<ion-pane>
<!-- header-bar -->
  <ion-header-bar class="bar-stable">
    <h1 class="title">Ionic Blank Starter</h1>
  </ion-header-bar>
  <!-- content : 내용 -->
  <ion-content>
    <div ng-repeat="movie in movies">{{ movie.title }}</div>
  </ion-content>
</ion-pane>
</body>
``` 

#### 실제 데이터 뿌려주기 

```
.controller('MovieCtrl', function($scope, $http){
  $scope.movies = [  ];
  $http.get('http://52.78.168.126:8080/api/movie/list/0')
    .success(function(response){
      // 실제 데이터 movieList 중 값만 받아오기 위해 forEach
      angular.forEach(response.movieList, function(data){
        console.log(data);
      })
    });
```

- 52.78.168.126:8080 이럴경우 데이터를 못불러온다. 실제기계에서는 되므로 프록시 제거해야한다. 

- ionic.config.json에서 설정한다.

```
{
  "name": "my-movies",
  "app_id": "",
  "proxies": [
    {
      "path": "/api", // 가상의 url
      "proxyUrl": "http://52.78.168.126:8080/api" // 실제 url
    }
  ]
}

``` 

- ionic 재실행 ($ionic serve)

#### api로 data 15개 뿌려주기 (기본으로 15개를 뿌려주게 된다.)

- ionic css 컴포넌트 참고 <http://ionicframework.com/docs/components/> 

- app.js

```
.controller('MovieCtrl', function($scope, $http){
  $scope.movies = [  ];
  $http.get('/api/movie/list/0')
    .success(function(response){
      // 실제 데이터 movieList 중 값만 받아오기 위해 forEach
      angular.forEach(response.movieList, function(data){
        $scope.movies.push(data);
      })
    });
})
```

- html 

```
<ion-content>
<div class="list">
<!-- item-avatar-left : 이미지를 좌측, 동그랗게 아바타 이미지처럼 들어가게함  -->
  <div class="item item-avatar-left" ng-repeat="movie in movies">
    <img ng-src="https://cdn3.iconfinder.com/data/icons/multimedia/100/play_movie_3-512.png">
    <h2>{{movie.title}}</h2>
    <p>{{movie.director}} {{movie.release_date}}</p>
  </div>
</div>
</ion-content>
```

#### 모바일에서 아래로 스크롤 시 계속 15개씩 추가되게 (무한 스크롤)
- <http://ionicframework.com/docs/api/directive/ionInfiniteScroll/>

```
<ion-infinite-scroll
  on-infinite="loadMore()"
  distance="1%">
</ion-infinite-scroll>
```

#### 모바일에서 (위로)당겼을 때 새로고침
- <http://ionicframework.com/docs/api/directive/ionRefresher/>

```
<ion-refresher
  pulling-text="당겨서 새로 고침"
  on-refresh="loadNew()">
</ion-refresher>
```

#### ionic사용한 앱 
- <http://showcase.ionicframework.com/>