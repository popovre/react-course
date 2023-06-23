import './App.css';
import Wrapper from './components/Wrapper';

function App() {
  return <div className="App">
    <Wrapper color='lightblue'>
      <h2>Text inside Wrapper</h2>
      <button>click me</button>
    </Wrapper>
    <Wrapper color='green'>
      <h2>another text</h2>
      <button>some button</button>
      <input type='text' placeholder='hi hihihihhi'></input>
    </Wrapper>
  </div>;
}

export default App;
