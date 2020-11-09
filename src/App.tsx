import React, { useState } from 'react';
import NewTodo from './components/NewTodo';
// import TodoList from './components/TodoList';
import './App.css';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    // instead of
    // setTodos([...todos, { id: Math.random().toString(), text }]);
    // we can use this (supported in react)
    setTodos(prevTodos => [...prevTodos, { id: Math.random().toString(), text }]);
  };

  const deleteTodoHandler = (todoId: string) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== todoId));
  };

  return (
    <div className='App'>
      <NewTodo    
          addTodo={todoAddHandler} 
      />
      <TodoList 
          items={todos} 
          deleteItem={deleteTodoHandler}
       />
    </div>
  );
};

export default App;
