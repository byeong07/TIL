# Sass
- codecademy 공부, 정리

## Your First Sass Stylesheet
- variables and nests.

### Nesting 
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

	- result
	```
	.parent {
	  color: blue;
	}

	.parent .child {
	    font-size: 12px;
	}
	```