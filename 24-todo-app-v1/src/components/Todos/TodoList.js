import './TodoList.module.css'
import Todo from './Todo'

export default function TodoList({todos}) {
	return todos.map((todo, index) => <Todo key = {index} todo = {todo}/>)
}