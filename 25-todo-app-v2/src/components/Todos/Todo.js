import styles from './Todo.module.css'
import {RiTodoFill, RiDeleteBin2Line} from 'react-icons/ri'
import {FaCheck} from 'react-icons/fa'
export default function Todo({todo, deleteTodo}) {

	return (
		<div className={styles.todo} onDoubleClick={() => {
			deleteTodo(todo.id);
		}}> 
			<RiTodoFill className={styles.todoIcon}/>
			<div className={styles.todoText}>
				{todo.text}
			</div>
			<RiDeleteBin2Line/>
			<FaCheck/>
		</div>
	)
}