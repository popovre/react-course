import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './components/Todos/TodoForm';
import TodoList from './components/Todos/TodoList';
import TodosActions from './components/Todos/TodosActions';

function App() {
  const [todos, setTodos] = useState([]);
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo };
      })
    );
  };

  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    };

    setTodos([...todos, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const resetTodoHandler = () => {
    setTodos([]);
  };

  const deleteCompletedTodoHandler = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };

  const isTodoCompleted = () => {
    return todos.find((todo) => todo.isCompleted === true) !== undefined
      ? true
      : false;
  };

  const disableClearButton = !isTodoCompleted();

  const countCompletedTodos = todos.filter((todo) => todo.isCompleted === true).length;

  return (
    <div className="app">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          resetTodos={resetTodoHandler}
          deleteCompletedTodos={deleteCompletedTodoHandler}
          disableClearButton={disableClearButton}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {countCompletedTodos > 0 && <h2>{`You have completed ${countCompletedTodos} ${countCompletedTodos > 1 ? 'todos' : 'todo'}`}</h2>}
      {!todos.length && <h2>Todo list is empty</h2>}
    </div>
  );
}

export default App;
