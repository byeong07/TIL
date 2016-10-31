# Sass

## Mixins and the & Selector

#### `&`

- 가상 클래스 사용시 
```
.notecard{ 
  &:hover{
      ...  
    }
  }

// compile result
.notecard:hover {
  ...
}
```

#### Mixin

- 사이트 전반에 걸쳐 재사용할 그룹 만들기
- 아래 예시처럼 argument를 사용할 수 있다.  
```
@mixin transform($transformation) {
  transform: $transformation;
  -webkit-transform: $transformation;
  -moz-transform: $transformation;
  -ms-transform: $transformation;
  -o-transform: $transformation;  
}

// 사용시 
@include transform(rotatey(-180deg));
```

- argument는 defult값을 정할 수 있다. 믹스인을 사용할 때, 매개변수가 없을 때 이 기본값이 사용된다. 
```
@mixin backface-visibility($visibility: hidden) {
   backface-visibility: $visibility;
  -webkit-backface-visibility: $visibility;
  -moz-backface-visibility: $visibility;
  -ms-backface-visibility: $visibility;
  -o-backface-visibility: $visibility;
}

// 기본값 사용시 
@include backface-visibility;
```

##### Mixin argument
- 여러개의 매개변수를 가질 수 있다. 
- @include 문 내에서 매개변수를 정의할 수 있다. 
- 값이 정해져 있는 경우 순서대로 보낼 수 있다.
- mixin 매개변수의 기본값이 없이 여러개가 정의되었다면, 기본값이 없는 것이 먼저 정의되어야 한다. 
- mixins can be nested. 중첩 가능

```
@mixin dashed-border($width, $color: #FFF) {
  border: {
     color: $color;
     width: $width;
     style: dashed;
  }
}

span { //only passes non-default argument
    @include dashed-border(3px);
}

p { //passes both arguments
    @include dashed-border(3px, green);
}

div { //passes out of order but explicitly defined
   @include dashed-border(color: purple, width: 5px); 
}
```

- 여러개의 매개변수와 list or map 형식 사용하기
 - 다음 예는 map형식을 사용한 것인데 이 경우 사용시 `...` 표기법을 사용한다. 
```
@mixin stripes($direction, $width-percent, $stripe-color, $stripe-background: #FFF) {
  background: repeating-linear-gradient(
    $direction,
    $stripe-background,
    $stripe-background ($width-percent - 1),
    $stripe-color 1%,
    $stripe-background $width-percent
  );
}

$college-ruled-style: ( 
    direction: to bottom,
    width-percent: 15%,
    stripe-color: blue,
    stripe-background: white
);

// 사용
@include stripes($college-ruled-style...);
```

### string interpolation (보간법)

- 변수를 다른 두 문자 사이에 넣을 때 `#{$변수}`
```
@mixin photo-content($file) {
  content: url(../img/#{$file}.jpg);
  object-fit: cover;
}

// 사용
@include photo-content('titanosaur');
```

### `&` selector usage inside of mixins. 믹스인 내에서 $ 

```
@mixin text-hover($color){
  &:hover {
      color: $color; 
  }
}

.word { 
	display: block;
	@include text-hover(red);
}

// 결과 
.word{ 
	display: block;
}
.word:hover{
	color: red;
}
```