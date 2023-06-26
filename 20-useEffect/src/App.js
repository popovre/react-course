import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  useEffect(()=>{
    console.log('called useEffect');

    fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then((response) => response.json())
    .then((json) => setTodo(json));
  }, []);
  console.log('app rendered')
  console.log(todo);

  return <div className="App"> {todo && <h1>{todo.title}</h1>}</div>
}

export default App;
