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

### 개발환경 설치

#### Node.js
- <https://nodejs.org>
- 플랫폼별 LTS 다운로드 

- IONIC설치 
 - $ npm install -g cordova ionic 
 - 설치확인 : $ cordova -v, $ ionic -v, $ ionic info

- Text Editor or IDE
 - windows 사용자는 Visual Studio Community(무료 IDE) 추천! (편리)