import {useState} from 'react';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TotoList';

function App() {
  const [todos, setTodos] = useState([])
  const onSubmitHandler = (text) => {
    setTodos([...todos, text]);
  }

  return <div className="App">
    <h1>Todo App</h1>    
    <TodoForm onFormSubmit={onSubmitHandler}/>
    <TodoList todos={todos}/>
  </div>;
}

export default App;
