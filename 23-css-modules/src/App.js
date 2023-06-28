import Info from './components/Info';
import './App.css';

function App() {
  return <div className="App">
    <Info/>
    <div className='info'>
      <h1>App component heading</h1>
      <button className='my-button'>App component button</button>
      <h2>Heading in the App</h2>
    </div>
  </div>;
}

export default App;
