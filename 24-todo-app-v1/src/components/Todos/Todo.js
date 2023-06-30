import styles from './Todo.module.css'
import {RiTodoFill} from 'react-icons/ri'

export default function Todo({todo, index, deleteTodo}) {

	return (
		<div className={styles.todo} onDoubleClick={() => {
			deleteTodo(index);
		}}> 
			<RiTodoFill className={styles.todoIcon}/>
			<div className={styles.todoText}>
				{todo}
			</div>
		</div>
	)
}