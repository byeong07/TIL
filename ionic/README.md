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
- 추후 계속 추가 

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
- REST API를 이용한 영화 개봉작 목록 조회 
 - <http://52.78.168.126:8080/api/movie/list/0> // 끝 숫자 : index값 이후의 값 15번씩 던져주는 api
 - JSON파일 형태 

1. $ionic start my-movies blank : 빈 앱 생성하기. 이름은 my-movies