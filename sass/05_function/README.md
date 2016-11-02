# Sass
- codecademy 공부, 정리

## Functions and Operations
Learn to use Sass functions, loops, and conditions to style different components of a webpage.<br>
함수, 반복문, 조건문 

#### 함수로 할 수 있는 것들 

- Operate on color values<br>
컬러값 연산하기

- Iterate on lists and maps<br>
list, map 데이터타입 반복

- Apply styles based on conditions<br>
조건에 따라 스타일 적용

- Assign values that result from math operations<br>
수학 연산의 결과 값 할당

### [내장함수](http://sass-lang.com/documentation/Sass/Script/Functions.html)

#### `fade-in($color, $amount)`

```
$color: rgba(39, 39, 39, 0.5);
$amount: 0.1;
$color2: fade-out($color, $amount);//rgba(39, 39, 39, 0.4)
```

#### `fade-out($color, $amount)`

```
$color: rgba(39, 39, 39, 0.5);
$amount: 0.1;
$color2: fade-out($color, $amount); //rgba(39, 39, 39, 0.4)
```

#### 색상 합하기

```
$color: #010203 + #040506; // 앞 두자리씩 01+04.. 빨강색끼리 합한다. 

//컴파일 결과
color: #050709;
```

#### `/` 기호 : division(나눗셈), separator(분리)

```
width: $variable/6; //division
line-height: (600px)/9; //division
margin-left: 20-10 px/ 2; //division
font-size: 10px/8px; //not division
```

### Each loops  `@each $item in $list`
Each loops in Sass iterate on each of the values on a list. 

```
@each $item in $list {
  //some rules and or conditions
}
```
`$item`값은 `$list` 객체의 값으로 동적으로 할당된다. 

```
$list: (orange, purple, teal);

@each $item in $list {
  .#{$item} {
    background: $item;
  }
}

// 컴파일 결과 
.orange {
  background: orange;
}

.purple {
  background: purple;
}

.teal {
  background: teal;
}

```

### For loops  `@for $i from $begin through(to) $end`

- through : end 포함
- to : end 불포함