import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css'

export default function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  disableClearButton,
}) {
  return (
			<div className={styles.todosActionsContainer}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear Completed Todos"
        onClick={deleteCompletedTodos}
        disabled={disableClearButton}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  );
}
