import { useState } from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';

function App() {
	const [todos, setTodos] = useState([]);

	const addTodoHandler = (text) => {
		setTodos([...todos, text]);
	}

	return (
		<div className='app'>
			<h1>Todo App</h1>
			<TodoForm addTodo={addTodoHandler} />
			<TodoList todos={todos}/>  
			{
				!todos.length && <h2>Todo list is empty</h2>
			}
			
		</div>
	)
}

export default App;
