import React from 'react';

interface TodoListProps {
  items: { id: string; text: string }[];
}
// React.FC 하면, 리액트 컴포넌트를 반환해줘야함.
const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => {
        return <li key={todo.id}>{todo.text}</li>;
      })}
    </ul>
  );
};

export default TodoList;
