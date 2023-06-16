import { useState } from 'react';
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const texts = [
    'hi',
    'bye',
    'gi',
    'nine',
    'press me',
    'press you'
  ];

  const incrementCount = () => {
    setCount(count + 2)
  };

  return <div className="App">
    <Counter count={count}/>
    {texts.map((value, index) => {
      return (<Button onClick={incrementCount} buttonText={value} key={index}/>)
    })}
  </div>;
}

export default App;
