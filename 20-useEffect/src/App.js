import {useState} from 'react';
import './App.css';

function App() {
  const [todo, setTodo] = useState(null);
  console.log('app rendered')

  fetch('https://jsonplaceholder.typicode.com/todos/5')
    .then((response) => response.json())
    // .then((json) => setTodo(json));

  return <div className="App"></div>;
}

export default App;
