# AngularJS Project
## [Hong's portfolio - sli.do 서비스 개발중](https://sharryhong.github.io/TIL/angularjs/hs_slido/src/index.html)

### 프로젝트 주제 

- 강의 중 실시간으로 질문, 답변을 받는 서비스인 sli.do 사이트 + 적절한 기능 보완 <br>
- 실제 서비스 예) [sli.do](https://app.sli.do/event/qao1egje/ask)

### Front-End 개발 기술

- AngularJS, JSON, JavaScript, jQuery
- HTML, SASS to CSS 
- Gulp

### 프로젝트 고려사항

#### 적절한 기능 추가<br>
답변(comment) 기능 추가

#### 반응형 웹 <br>
미디어쿼리 기술을 사용하여 다양한 기기에서 적합하게 보이도록 하였습니다.

#### 추후 추가 예정 <br>
- [ ] Webpack으로 모듈관리 예정입니다. <br>
- [ ] 하이브리드 웹앱 : 개발 후 아이오닉 기술을 사용하여 모바일 앱으로도 구현할 예정입니다.<br>
- [ ] firebase나 back-end 기술을 사용하여 실제 데이터를 사용하고 싶습니다. 

## 개발 진행 상황

#### AngularJS, JavaScript 
- [x] 질문을 입력받아 popular(인기순), Recent(최신순) 대로 보여주는 기능 
- [x] popular(인기순) : 좋아요 버튼 클릭시 자동으로 상단으로 이동하는 기능 (AngularJS - filter)
- [x] 질문자 이름을 입력하지 않을 시 `Anonymous(익명)`로 표시되는 기능 
- [x] 질문 내용을 클릭하면 상세페이지로 이동하여 comment(덧글)를 달 수 있는 기능 (AngularJS - route)

#### Sass to CSS 
- [x] 좌측 슬라이드 메뉴로 들어가고 나오게하기 (Media Query, CSS3 Animation)
- [ ] 모바일 대응 시 좌측 슬라이드 메뉴 style 바꾸기 