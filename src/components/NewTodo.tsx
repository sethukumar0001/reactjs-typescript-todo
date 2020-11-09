import React, { useRef } from 'react';
import PropTypes from 'prop-types';
// import './NewTodo.css';

interface NewTodoProps {
  addTodo: (text: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = ({ addTodo }) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const entredText = textInputRef.current!.value;
    addTodo(entredText);
    textInputRef.current!.value = '';
  };

  return (
    <form onSubmit={todoSubmitHandler}>
      <div className='form-control'>
        <label htmlFor='todo-text'>Todo Text</label>
        <input type='text' id='todo-text' ref={textInputRef} />
      </div>
      <button type='submit'>ADD TODO</button>
    </form>
  );
};

NewTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default NewTodo;
