import React, { useRef } from 'react';

import './NewTodo.css';

type NewTodoProps = {
  onAddTodo: (todoText: string) => void;
};

const NewTodo: React.FC<NewTodoProps> = (props) => {
  // useRef는 제네릭 타입임, 어떤 타입을 전달해야하나면, ref에는, input요소를 지정했기에 HTML InputElement 저장, 그 후 ref를 설정할 때 기본값을 입력해야하는데, 이건 null이다. 컴포넌트는 코드가 실행될떄 처음으로 렌더링되고, 아직 렌더링되지 않았기에 가리키는 값이 없음. 렌더링 후 연결 설정되야 ref이 동작
  const textInputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    // 타입스크립트는 textInputRef가 제대로 연결되었는지 확신할 수 없기 때문에, null일수도 있다는 에러가 발생, !을 붙여 해결해준다.
    const enteredText = textInputRef.current!.value;
    console.log(enteredText);
    props.onAddTodo(enteredText);
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>Add Todo</button>
    </form>
  );
};

export default NewTodo;
