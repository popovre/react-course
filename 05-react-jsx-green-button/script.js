const App = () => {
  const [buttonText, setButtonText] = React.useState('Click me');
  
  const onButtonClick = () => {
    setButtonText(`Hello from React', ${Math.random()}`);
  };

  return (
    <div className="app center-positioner">
      <button id="my-button" onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);
