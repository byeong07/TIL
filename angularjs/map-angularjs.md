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

2. module 안의 dependency array에 leaflet-directive를 inject한다. 예 : 

	```
	var app = angular.module('mapApp', ['leaflet-directive']);
	```

3. view (html)에서 `<leaflet></leaflet>` 만 해주면 기본 map이 삽입된다. <br><br>

4. 특정 위치 정보를 받아 지도에 보여주고 싶을 때 (지도 중앙에 위치)

 - controller에 프로퍼티를 만들어 위치를 지정한다. (위도, 경도, 배율) 예 : 

	```
	app.controller("MainController", [ '$scope', function($scope) {
		$scope.mapCenter = { lat: 40.741934, lng: -74.004897, zoom: 17 };
	}]);
	```

 - view에서 center 속성에 위에서 추가한 프로퍼티를 값으로 넣어준다. 

	```
	<leaflet center="mapCenter"></leaflet>
	```

5. 위치 표시(markers)를 하고 싶을 때 

 - controller에 프로퍼티를 만들어 표시를 하고 싶은 위치를 지정한다. 배열로 여러개를 표시할 수 있다. 예 : 

	```
	$scope.mapMarkers = [ { lat: 40.741389, lng: -74.003056, message: "111 Eighth Avenue" }, { lat: 40.7425, lng: -74.006111, message: "Chelsea Market" } ];
	```

 - view에서 markers 속성에 위에서 추가한 프로퍼티를 값으로 넣어준다. 

	```
	<leaflet center="mapCenter" markers="mapMarkers"></leaflet>
	```