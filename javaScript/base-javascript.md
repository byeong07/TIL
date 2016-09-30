# JavaScript
코드카데미 자바스크립트 공부 중 

- `Math.random()` : This code will return a random number between 0 and 1.<br>
Math.random()을 이용하여 0 ~ 100 사이 정수 구하기 

```
var randomNumber = Math.floor(Math.random() * 100);
```
## Function 함수

- A function is a block of code designed to perform a task.<br><br>
함수는 작업을 수행하기 위해 설계된 코드 블록이다.

- Functions are like recipes. They take data or variables, perform a set of tasks on them, and then return the result.<br><br>
기능 조리법과 같다. 데이터나 변수를 가지고 그들에 일련의 작업을 수행 한 후 결과를 반환한다.

- For instance, to make ice cream, you can put sugar, cream, and ice into an ice cream machine, and it will output delicious ice cream. The stuff that happens in the middle (where the ingredients are operated on) – that's what functions do. They take inputs, operate on them, then output a result.<br><br>
함수는 입력을 받아 작동시키고 그 결과를 출력한다.

```
function makePizza(topping, crustType){
  console.log('Pizza\'s done. Let\'s eat!'+topping+crustType);
}

makePizza('cheese','thin crust');
```

```
var makePizza = function (topping, crustType){
   return 'Pizza\'s done. Let\'s eat!'+ topping + crustType;
}

var customPizza = makePizza('cheese','thin crust');

console.log(customPizza);
```

