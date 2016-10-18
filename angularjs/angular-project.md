# AngularJS Project
codecademy pro AngularJS Final Project 과정을 통한 level up 

### 목표 
- submit your suggestion. user로 부터 제안을 받을 수 있다. 
- upvote. 각 제안에 좋아요를 누를 수 있다. 
- most upvoted suggestions to rise to the top. 좋아요가 많은 순서대로 보여진다. 
- comment. 각 제안에 덧글을 달 수 있다. 

### Setup

- AngularJS 다운 받기 
- 나의 경우 : gulp로 javascript, sass 등 관리, jade 템플릿 엔진으로 html 공통 코드 관리 예정

### Program Design

####  MVC 패턴 
- 앵귤러 앱은 MVC (Model, View, Controller) 패턴을 구현한다. 이 것은 웹 애플리케이션을 구성하는 일반적인 방법이다. 
- Model : 실제 데이터를 반영한다. 원시 데이터를 저장하고 앱의 필수 구성 요소를 정의 하는 등 
- View : 사용자와 직접 상호 작용하는 모든 기능이 구성된다.
- Controller : 모델과 뷰 사이에서 연결 역할을 한다. 사용자의 입력을 받아 그것으로 무엇을 할지 등. 애플리케이션의 두뇌 역할을 한다. 
- MVC는 웹 앱의 작동 방식에 대해 생각하게 하여 앱을 설계하는데 도움을 준다. 

- 예를 들어 to-do 앱을 만든다고 하자. 
 - Model : task, list 등 
 - view : to do list가 어느 폰트, 컬러로 보여지는 것 
 - controller : 어떻게 task를 추가할 것인가, 완료 등.. view에서 버튼을 누르면 model이 추가된다 등 

#### 폴더 
- 각 MVC 방식 파트로 나눠 작업한다. 
- 앵귤러는 MVC패턴을 따르고 있다. 
- servises : data를 보유. 즉, Model이다. 
- html : view를 마크업한다. 
- controller : controller :) 

#### 프로젝트에 대한 아이디어 
- view : 제안 리스트를 보여준다. 
- input이 필요한다. (제안 남기기)
- upvote 할 수 있어야 한다. 
- comment를 달 수 있어야 한다. 

#### 이 아이디어를 code화 시켜보자. 
- view : html file. 컨트롤러로 부터 제안 리스트를 받아 출력시킨다. 
- input : 앱의 model (data) 로 부터 업데이트 받아야 한다. 컨트롤러는 view와 model사이의 중개자 역할을 하므로, 업데이트시 컨트롤러를 사용한다. 
- upvote : model에 좋아요 수를 변경하는 버튼 추가 
- comment : 다른 view를 추가 시킬 routing이 필요하다. 