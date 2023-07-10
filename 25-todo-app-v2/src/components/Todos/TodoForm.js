import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

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
        <Button type="submit" title='Submit'>Submit</Button>
      </form>
    </div>
  );
}
