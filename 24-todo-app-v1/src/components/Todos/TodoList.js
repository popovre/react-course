import './TodoList.module.css';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos }) {
  return (
    <div className={styles.TodoListContainer}>
      {todos.map((todo, index) => <Todo key={index} todo={todo} />)}
    </div>
  );
}
