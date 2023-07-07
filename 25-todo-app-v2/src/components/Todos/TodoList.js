import './TodoList.module.css';
import Todo from './Todo';
import styles from './TodoList.module.css';

export default function TodoList({ todos, deleteTodo, toggleTodo }) {
  return (
    <div className={styles.TodoListContainer}>
      {todos.map((todo) => <Todo key={todo.id} deleteTodo={deleteTodo} todo={todo} toggleTodo={toggleTodo} />)}
    </div>
  );
}
