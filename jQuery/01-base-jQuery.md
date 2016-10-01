# jQuery
코드카데미 제이쿼리 공부 중 

### JavaScript and the DOM

- 예를들어 `var skillset = document.getElementsByClassName('skillset');` 한다면, skillset에는 `[object HTMLCollection]` 가 담긴다. 

> This confirms that JavaScript can select HTML elements. Since we can select HTML elements, we can manipulate them.<br><br>
자바스크립트가 html요소를 선택할 수 있음을 보여준다. html 요소를 선택할 수 있기 때문에 그것을 조작할 수 있다. 

> getElementsByClassName 등 으로 DOM을 선택하는 것보다 jQuery가 편리하다.

### jQuery Selectors

```
function main(){
  var $skillset = $('.skillset');
  alert($skillset);
}

$(document).ready(main);
```

- 결과 : `[object Object]`

- Now that we can select an element with jQuery, we can use built-in jQuery functions to modify it.<br><br>
제이쿼리로 요소를 선택할 수 있고, 내장된 jQuery 함수로 수정할 수 있다. 