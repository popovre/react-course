import { useState } from 'react';
import styles from './TodoForm.module.css';

export default function TodoForm(props) {
  const [text, setText] = useState('');
  const { addTodo } = props;

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    addTodo(text);
    setText('');
  };
  return (
    <div className={styles.TodoFormContainer}>
      <form className="todo__form" onSubmit={onSubmitHandler}>
				<input
					type="text"
					placeholder="Enter new todo"
					value={text}
					onChange={(evt) => setText(evt.target.value)}
				></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
