var todos = [
  {
    id: '1',
    title: 'first',
    description: 'first todo',
    complete: false
  },
  {
    id: '2',
    title: 'second',
    description: 'second todo',
    complete: true
  },
  {
    id: '3',
    title: 'third',
    description: 'third todo',
    complete: true
  }
];

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
      return;
    }
  }
}

function createTodo(todo) {
  todos.push(todo);
}