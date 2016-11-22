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