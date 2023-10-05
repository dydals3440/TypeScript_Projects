import React from 'react';

import './TodoList.css';

// Props의 타입도 정의해줘야함(부모 요소에서 받아오는 데이터)
interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
}
// React.FC 하면, 리액트 컴포넌트를 반환해줘야함.
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return (
          <li key={todo.id}>
            <span>{todo.text}</span>
            {/* onClick 버튼이 실행되면, 인터페이스의 onDeleTodo 프로퍼티를 받아서 함수가 호출. 이 방법의 문제는 todoID를 매개변수로 받는다는 것  이 방법이 제대로 실행되려면 bind(null, onDeletodo에서 받은 매개변수)*/}
            <button onClick={props.onDeleteTodo.bind(null, todo.id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
