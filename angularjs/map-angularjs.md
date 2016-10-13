## 앵귤러 앱에 지도 삽입하기 

### [Angular Google Maps - Leaflet](http://tombatossals.github.io/angular-leaflet-directive/#!/getting-started)

개발자들이 이미 만들어 놓은 custom directive를 사용해보자.

1. includes : html 에 아래 `<script>`와 `<link>` 추가 

 - Javascript

	```
	<script src="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.js"></script>
	<script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.2.6/angular.min.js"></script>
	<script src="/js/angular-leaflet-directive.min.js"></script>
	```

 - css

	```
	<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.7.1/leaflet.css">
	```

2. module 안의 dependency array에 leaflet-directive를 inject한다. 아래 예 처럼

	```
	var app = angular.module('mapApp', ['leaflet-directive']);
	```

3. view (html)에서 `<leaflet></leaflet>` 만 해주면 기본 map이 삽입된다. 