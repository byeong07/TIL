// 아래 공통모듈은 factory, service로 만들어 사용하는 것이 좋다. 
// 메모리 효용 등
// 아래처럼 만들고 angular.module('mytodos', ['ionic', 'mytodos.todo-data']) 추가 
// 나중에 쌤이 추가해주실 예정 
// angular.module('mytodos.todo-data',[])
// .factory('TodoData', function(){
//   var todos = [];
//   return {
//     list: function() {

//     },
//     create: function() {

//     }
//   }
// })

// 로컬스토리지의 json값 불러오기. 
var todos = angular.fromJson(window.localStorage['todos'] || '[]');

// 로컬스토리지에 json형태로 저장하기 
function saveToStorage() {
  window.localStorage['todo'] = angular.toJson(todos);
}

// 하나의 특정 할일을 넘겨주는 함수
function getTodo(todoId) {
  for (var i = 0; i < todos.length; i++) {
    if(todos[i].id === todoId) {
      return todos[i];
    }
  }
  return undefined;
}

// 하나의 todo객체를 넘기면 반영하는 함순
function updateTodo(todo) {
  for(var i=0; i<todos.length; i++) {
    if(todos[i].id === todo.id) {
      todos[i] = todo;
      saveToStorage();
      return;
    }
  }
}

function createTodo(todo) {
  todos.push(todo);
  saveToStorage();
}

function remove(todoId) {
  for(var i=0; i<todos.length; i++) {
    if(todos[i].id === todoId) {
      // i는 현재위치. 1개 삭제
      todos.splice(i, 1);
      // 변경사항을 로컬스토리지에 저장
      saveToStorage();
      return;
    }
  }
}

// todo : 움직일 객체
function move(todo, fromIndex, toIndex) {
  // 현재 위치 없애기 
  todos.splice(fromIndex, 1);
  // 0이면 삭제하지 않는다. 세번째 파라미터를 넣는다. 배열내에서 순서 바뀌는 효과
  todos.splice(toIndex, 0, todo);
  saveToStorage();
}