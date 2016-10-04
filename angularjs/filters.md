# [Filter](https://docs.angularjs.org/api/ng/filter) components in ng

### filter	
Selects a subset of items from array and returns it as a new array.<br><br>
배열에서 item들의 하위 집합을 선택하여 새 배열로 return한다.

### currency	
Formats a number as a currency (ie $1,234.56). When no currency symbol is provided, default symbol for current locale is used.

### number	
Formats a number as text.

```
<script>
  angular.module('numberFilterExample', [])
    .controller('ExampleController', ['$scope', function($scope) {
      $scope.val = 1234.56789;
    }]);
</script>
<div ng-controller="ExampleController">
  Default formatting: <span id='number-default'>{{val | number}}</span><br>
  No fractions: <span>{{val | number:0}}</span><br>
  Negative number: <span>{{-val | number:4}}</span>
</div>

// 결과 
Default formatting: 1,234.568
No fractions: 1,235
Negative number: -1,234.5679

```

### date	
Formats date to a string based on the requested format.<br><br>
날짜 형식으로 변환. 실제 변환되는 부분은 [사이트 참조](https://docs.angularjs.org/api/ng/filter/date) 

### json	
Allows you to convert a JavaScript object into JSON string.<br><br>
자바 스크립트 객체를 JSON 문자열로 변환 할 수 있다.

### lowercase	
Converts string to lowercase.<br><br>
문자를 소문자로 변환 

### uppercase	
Converts string to uppercase.<br><br>
문자를 대문자로 변환

### limitTo	
Creates a new array or string containing only a specified number of elements. The elements are taken from either the beginning or the end of the source array, string or number, as specified by the value and sign (positive or negative) of limit. Other array-like objects are also supported (e.g. array subclasses, NodeLists, jqLite/jQuery collections etc). If a number is used as input, it is converted to a string.

### orderBy	
Returns an array containing the items from the specified collection, ordered by a comparator function based on the values computed using the expression predicate.