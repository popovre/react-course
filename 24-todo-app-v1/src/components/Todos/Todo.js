import styles from './Todo.module.css'

export default function Todo({todo}) {
	return (
		<div className={styles.todo}> 
			<div className={styles.todoText}>
				{todo}
			</div>
		</div>
	)
}