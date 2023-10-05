import React, { useState } from 'react';
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';
import { Todo } from './todo.model';

const App: React.FC = () => {
  // 리액트에서는, 배열을 업데이트 하는 것만으로 충분하지 않음.
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };
  return (
    <div className='App'>
      {/* 함수를 실행시키는게 아닌, 함수를 가리키는 포인터를 onAddTodo에 전달! */}
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};
export default App;

// useState([]) 일떄,
// setTodos([{ id: Math.random().toString(), text: text }]) 에러 발생
// useState([])를 빈 배열로 초기화했을 떄의 상태를 타입스크립트가 추론했기 때문임.
// useState('') 일떄는, 상태가 문자열이라 추론 setTodos('123') 이라면 정상 동작
// 위의 문제를 해결하기 위해서는 useState안에 들어갈 내용들이, 무엇인지 타입을 작성해주어야함.
// 즉 id: string, text: string, 이라고 작성해주고 많이 사용할꺼같은 것은 todo.model.ts로 따로 export해주자!
// useState<{id: string; text: string}[]>([])
