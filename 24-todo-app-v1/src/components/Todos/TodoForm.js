import { useState } from 'react';
import './TodoForm.module.css';

export default function TodoForm(props) {
  const [text, setText] = useState('');
  const { addTodo } = props;

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <>
      <form className="todo__form" onSubmit={onSubmitHandler}>
        <label>
          <input
            type="text"
            placeholder="Enter new todo"
            value={text}
            onChange={(evt) => setText(evt.target.value)}
          ></input>
        </label>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
