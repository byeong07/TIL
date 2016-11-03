# Sass
- codecademy 공부, 정리

## Sustainable SCSS
Learn about the best Sass practices such as partials, placeholders and @import.

### 파일 구조
파일 구조는 파일 찾기 및 업데이트 작업을 쉽게하도록, 각 구성 요소의 기능을 생각하는 것에 주의한다.

- 예) 
```
sass/
  components/
    _buttons.scss 
    _carousel.scss 
    _cover.scss     

  helpers/
    _variables.scss
    _functions.scss
    _mixins.scss

  layout/
    _grid.scss
    _header.scss
    _footer.scss

  pages/
    _home.scss
    _contact.scss
```

### `@import`
SCSS파일 포함시키기 

- helper폴더의 _mixins.scss를 포함시킬 경우 
```
@import "helper/mixins"; // _ 와 확장자 생략 가능 
```

#### 일반 css의 `@import` 규칙처럼 사용되는 경우 
- 파일 확장자가 `.css`인 경우
- 파일이름이 `http://`로 시작하는 경우
- 파일이름이 `url()`인 경우 
- 미디어쿼리가 있는 경우 

### `@extend`
```
.lemonade {
  border: 1px yellow;
  background-color: #fdd;
}
.strawberry {
  @extend .lemonade;
  border-color: pink;
}

// 컴파일 결과 
.lemonade, .strawberry {
  border: 1px yellow;
  background-color: #fdd;
}

.strawberry {
  border-color: pink;
}
```

### `%placeholders`