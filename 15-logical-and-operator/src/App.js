import { useState } from 'react';
import './App.css';
import Button from './components/Button'
import Counter from './components/Counter';
import ResetButton from './components/ResetButton';

function App() {
  const [count, setCount] = useState(0);
  const buttonStyle = {backgroundColor:'lightgreen'};

  const incrementCount = () => {
    setCount(count + 2)
  }

  const resetCount = () => {
    setCount(0);
  }

  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <ResetButton onClick={resetCount} style={buttonStyle} count={count}/>
    </div>
  );
}

export default App;
