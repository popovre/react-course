import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		const newTodo = {
			text,
			isCompleted: false,
			id: uuidv4()
		}

		console.log(newTodo)
		setTodos([...todos, newTodo]);
	}

	const deleteTodoHandler = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id))
	}

	return (
		<div className='app'>
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos} deleteTodo={deleteTodoHandler}/>  
			{
				!todos.length && <h2>Todo list is empty</h2>
			}
			
		</div>
	)
}

export default App;
