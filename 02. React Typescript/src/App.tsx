import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {
  // 리액트에서는, 배열을 업데이트 하는 것만으로 충분하지 않음.
  const todos = [{ id: 't1', text: 'Finish the course' }];

  const todoAddHandler = (text: string) => {
    console.log(text);
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
