# Sass
- codecademy 공부, 정리

## Your First Sass Stylesheet
- variables and nests.

### Nesting (중첩)

- SCSS파일에서 선택자의 scope(범위)는 `{ }` 사이
- SASS파일에서는 {}를 쓰지않고 들여쓰기로 구분한다.
- 내부의 선택자는 children. 

- 예)
	```
	.parent {
	  color: blue;
	  .child {
	    font-size: 12px;
	  }
	}
	```

	- compile result
	```
	.parent {
	  color: blue;
	}

	.parent .child {
	    font-size: 12px;
	}
	```

#### 속성에 관련한 Nesting `:`

- 예)
	```
	.parent {
	  font : {
	    family: Roboto, sans-serif;
	    size: 12px;
	    decoration: none;
	  }
	}
	```

	- compile result
	```
	.parent {
	  font-family: Roboto, sans-serif;
	  font-size: 12px;
	  font-decoration: none;
	}
	```

### Variables (변수) 
- `$`를 붙인다. 
- 예) 
```
$translucent-white: rgba(255,255,255,0.3);

background-color: $translucent-white;
```

### Data Type

- Numbers, such as 8.11, 12, and 10px. Notice that while 10 has a unit of px associated with it, it is still considered a number. <br>
숫자. sass에서는 px같은 단위가 붙어도 숫자데이터이다. 

- Strings of text, with and without quotes. Some examples are "potato", 'tomato', span.<br>
문자. 

- Booleans, or simply true and false.<br>
논리. true, false

- null, which is considered an empty value.<br>
null. 빈 값

- Lists can be separated by either spaces or commas. <br>
리스트(배열 개념). 스페이스나 콤마로 구분한다. <br>
`1.5em Helvetica bold;` or `Helvetica, Arial, sans-serif;

- Maps<br>
맵(객체 개념)<br>
`(key1: value1, key2: value2);`

### 개념정리 
- Variables improve readability and maintainability.<br>
변수는 가독성과 유지보수를 향상시켜준다. 

- Nesting makes code more efficient by eliminating repetition and showing the clear DOM relationship in styling.<br>
중첩은 반복을 제거하고 스타일링에 분명한 DOM관게를 보여줌으로서 코드를 효율적으로 만든다. 