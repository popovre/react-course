import Todo from './Todo';

export default function TodoList(props) {
	const {todos} = props;
	return (
		<div className='todo__list'>
			{todos.map((todo, index) => <Todo key={index} todo={todo}/>)}
		</div>
	)
}